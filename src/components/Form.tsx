import React, { Component } from 'react';
import Card from './Card';

import noImage from './../assets/no-image.jpg';

interface IForm {
  addCard: (card: CardProps) => void;
}

class Form extends Component<IForm> {
  titleInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  descrInput: React.RefObject<HTMLTextAreaElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  cards: React.RefObject<Card[]>;
  fileLink: string;

  constructor(props: IForm) {
    super(props);
    this.titleInput = React.createRef();
    this.priceInput = React.createRef();
    this.descrInput = React.createRef();
    this.fileInput = React.createRef();
    this.cards = React.createRef();
    this.fileLink = '';
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const fileInput = this.fileLink;
    const titleInput = this.titleInput.current!.value;
    const priceInput = this.priceInput.current!.value;
    const descrInput = this.descrInput.current!.value;

    const card: CardProps = {
      title: titleInput,
      image: fileInput ? fileInput : noImage,
      price: +priceInput,
      text: descrInput,
      likes: 0,
      bookmarks: 0,
    };

    this.props.addCard(card);

    alert('Card data has been saved');
    this.fileLink = '';
    target.reset();
  }

  handleFileInput(e: React.SyntheticEvent) {
    const reader = new FileReader();
    const target = e.target as HTMLInputElement;

    if (target.files) {
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const readerTarget = e.target as FileReader;
        this.fileLink = readerTarget.result?.toString() as string;
      };

      reader.readAsDataURL(target.files[0]);
    }
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <label className="form__label">Input card data: </label>
          <input
            className="form__input form__input_type_file"
            type="file"
            placeholder="Attach flat photo"
            accept="image/*"
            ref={this.fileInput}
            onChange={this.handleFileInput.bind(this)}
          />
          <input
            className="form__input form__input_type_title"
            type="text"
            placeholder="Input flat name"
            ref={this.titleInput}
            required
          />
          <input
            className="form__input form__input_type_price"
            type="number"
            min="0"
            max="10000"
            placeholder="Input flat price"
            ref={this.priceInput}
            required
          />
          <textarea
            className="form__input form__input_type_descr"
            placeholder="Input flat description"
            ref={this.descrInput}
            required
          />
          <input className="form__input form__input_type_submit" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Form;
