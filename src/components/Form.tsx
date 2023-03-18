import React, { Component } from 'react';
import Card from './Card';

import noImage from './../assets/no-image.jpg';

interface IForm {
  addCard: (card: CardProps) => void;
}

class Form extends Component<IForm> {
  form: React.RefObject<HTMLFormElement>;
  titleInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  descrInput: React.RefObject<HTMLTextAreaElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  cards: React.RefObject<Card[]>;
  fileLink: string;

  constructor(props: IForm) {
    super(props);
    this.form = React.createRef();
    this.titleInput = React.createRef();
    this.priceInput = React.createRef();
    this.descrInput = React.createRef();
    this.fileInput = React.createRef();
    this.cards = React.createRef();
    this.fileLink = '';
  }

  state = {
    disabled: true,
    required: false,
  };

  async handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!this.state.required) {
      await this.setState({ required: true });
      e.target.dispatchEvent(new Event('click'));
      await this.setState({ disabled: true });
      await this.checkFormValidation();
      if (this.state.disabled) return;
    }

    const target = e.target as HTMLFormElement;

    const card: CardProps = {
      title: this.titleInput.current!.value,
      image: this.fileLink ? this.fileLink : noImage,
      price: +this.priceInput.current!.value,
      text: this.descrInput.current!.value,
      likes: 0,
      bookmarks: 0,
    };

    this.props.addCard(card);

    alert('Card data has been saved');
    this.fileLink = '';
    target.reset();
    this.setState({ disabled: true, required: false });
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

  handleInput(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      this.setState({ disabled: false });
      if (this.state.required) this.checkFormValidation();
    }
  }

  checkFormValidation() {
    this.setState({ disabled: this.form.current?.checkValidity() ? false : true });
  }

  render() {
    return (
      <>
        <form
          className="form"
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.checkFormValidation.bind(this)}
          ref={this.form}
        >
          <fieldset>
            <label className="form__label">Flat image</label>
            <input
              className="form__input form__input_type_file"
              type="file"
              placeholder="Attach flat image"
              accept="image/*"
              onChange={this.handleFileInput.bind(this)}
              ref={this.fileInput}
            />
          </fieldset>

          <fieldset>
            <label className="form__label">Flat Title</label>
            <input
              className="form__input form__input_type_title"
              type="text"
              placeholder="Input flat name"
              ref={this.titleInput}
              onInput={this.handleInput.bind(this)}
              required={this.state.required}
            />
            <span>Invalid Input</span>
          </fieldset>

          <fieldset>
            <label className="form__label">Flat Price</label>
            <input
              className="form__input form__input_type_price"
              type="number"
              min="0"
              max="10000"
              placeholder="Input flat price"
              ref={this.priceInput}
              onInput={this.handleInput.bind(this)}
              required={this.state.required}
            />
            <span>Invalid Input</span>
          </fieldset>

          <fieldset>
            <label className="form__label">Flat Description</label>
            <textarea
              className="form__input form__input_type_descr"
              placeholder="Input flat description"
              ref={this.descrInput}
              onInput={this.handleInput.bind(this)}
              required={this.state.required}
            />
            <span>Invalid Input</span>
          </fieldset>

          <fieldset>
            <label className="form__label">Submit your ad</label>
            <input
              className="form__input form__input_type_submit"
              type="submit"
              value="Submit"
              disabled={this.state.disabled}
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
