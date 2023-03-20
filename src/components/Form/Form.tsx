import React, { Component } from 'react';
import Card from './../Card/Card';

import noImage from './../../assets/no-image.jpg';

class Form extends Component<FormProps> {
  form: React.RefObject<HTMLFormElement>;
  titleInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  descrInput: React.RefObject<HTMLTextAreaElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  fileLink: string;

  constructor(props: FormProps) {
    super(props);
    this.form = React.createRef();
    this.titleInput = React.createRef();
    this.priceInput = React.createRef();
    this.descrInput = React.createRef();
    this.fileInput = React.createRef();
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

  checkFormValidation() {
    this.setState({ disabled: this.form.current?.checkValidity() ? false : true });
  }

  render() {
    return (
      <form
        className="form"
        data-testid="form"
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
            data-testid="title"
            ref={this.titleInput}
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
            data-testid="price"
            placeholder="Input flat price"
            ref={this.priceInput}
            required={this.state.required}
          />
          <span>Invalid Input</span>
        </fieldset>

        <fieldset>
          <label className="form__label">Flat Description</label>
          <textarea
            className="form__input form__input_type_descr"
            placeholder="Input flat description"
            data-testid="descr"
            ref={this.descrInput}
            required={this.state.required}
          />
          <span>Invalid Input</span>
        </fieldset>

        <fieldset>
          <label className="form__label">Date of arrival</label>
          <input type="date" className="form__input" placeholder="Input arrival date" />
        </fieldset>

        <fieldset>
          <label className="form__label">Persons planning to live</label>
          <div className="fieldset_type_radio__wrapper">
            <div className="form__input_type_radio">
              <label className="form__label">1</label>
              <input type="radio" className="form__input" name="persons" />
            </div>
            <div className="form__input_type_radio">
              <label className="form__label">2</label>
              <input type="radio" className="form__input" name="persons" />
            </div>
            <div className="form__input_type_radio">
              <label className="form__label"> &gt;2</label>
              <input type="radio" className="form__input" name="persons" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <label className="form__label">Special conditions</label>
          <div>
            <div>
              <label className="form__label">Smoking allowed</label>
              <input type="checkbox" className="form__input" />
            </div>
            <div>
              <label className="form__label">Pets allowed</label>
              <input type="checkbox" className="form__input" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <label className="form__label">Pick area</label>
          <select name="location">
            <option value="Bielany">Bielany</option>
            <option value="Bemowo">Bemowo</option>
            <option value="Bialoleka">Bialoleka</option>
            <option value="Wawer">Wawer</option>
            <option value="Wesola">Wesola</option>
            <option value="Wlochy">Wlochy</option>
            <option value="Wola">Wola</option>
            <option value="Zoliborz">Zoliborz</option>
            <option value="Mokotów">Mokotów</option>
            <option value="Ochota">Ochota</option>
            <option value="Praga Poludnie">Praga Poludnie</option>
            <option value="Praga Pólnoc">Praga Pólnoc</option>
            <option value="Rembertów">Rembertów</option>
            <option value="Sródmiescie">Sródmiescie</option>
            <option value="Targówek">Targówek</option>
            <option value="Ursus">Ursus</option>
            <option value="Ursynów">Ursynów</option>
          </select>
        </fieldset>

        <fieldset>
          <label className="form__label">Submit your ad</label>
          <input
            className="form__input form__input_type_submit"
            type="submit"
            value="Submit"
            disabled={this.state.disabled}
            data-testid="submit"
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
