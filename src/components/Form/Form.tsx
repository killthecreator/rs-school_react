import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';
import FormProps from './FormProps';

import noImage from './../../assets/no-image.jpg';

<<<<<<< HEAD
class Form extends Component<FormProps> {
  form: React.RefObject<HTMLFormElement>;
  titleInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  descrInput: React.RefObject<HTMLTextAreaElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.form = React.createRef();
    this.titleInput = React.createRef();
    this.priceInput = React.createRef();
    this.descrInput = React.createRef();
    this.fileInput = React.createRef();
  }

  state = {
    disabled: true,
    required: false,
    fileLink: '',
  };

  async handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!this.state.required) {
      await this.setState({ required: true });
      await this.checkFormValidation();
      if (this.state.disabled) return;
    }

    const target = e.target as HTMLFormElement;

    if (!this.titleInput.current || !this.priceInput.current || !this.descrInput.current) return;

    await this.handleFileInput();

    const card: CardProps = {
      title: this.titleInput.current.value,
      image: this.state.fileLink ? this.state.fileLink : noImage,
      price: +this.priceInput.current.value,
      text: this.descrInput.current.value,
      likes: 0,
      bookmarks: 0,
    };

    this.props.addCard(card);

    alert('Card data has been saved');
    target.reset();
    this.setState({ disabled: true, required: false, fileLink: '' });
  }

  handleFileInput() {
    if (this.fileInput.current && this.fileInput.current.files) {
      const file = this.fileInput.current.files[0];
      if (file) {
        const link = URL.createObjectURL(file);
        this.setState({ fileLink: link });
      }
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
            data-testid="file"
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
              <input type="radio" className="form__input" name="persons" defaultChecked />
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
=======
interface FormData {
  image: FileList;
  title: string;
  price: number;
  text: string;
>>>>>>> module03
}

const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const fileLink = handleFileInput(data.image);
    const card = {
      ...data,
      image: fileLink ? fileLink : noImage,
      bookmarks: 0,
      likes: 0,
    };
    props.addCard(card);
    alert('Card data has been saved');
    reset();
  };

  const handleFileInput = (image: FileList) => {
    if (image[0]) {
      const link = URL.createObjectURL(image[0]);
      return link;
    }
  };

  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label className="form__label">Flat image</label>
        <input
          className="form__input form__input_type_file"
          type="file"
          placeholder="Attach flat image"
          accept="image/*"
          data-testid="file"
          {...register('image')}
        />
      </fieldset>

      <fieldset>
        <label className="form__label">Flat Title</label>
        <input
          className={`form__input form__input_type_title ${errors.title ? 'error' : ''}`}
          type="text"
          placeholder="Input flat name"
          data-testid="title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Invalid Input</span>}
      </fieldset>

      <fieldset>
        <label className="form__label">Flat Price</label>
        <input
          className={`form__input form__input_type_price ${errors.price ? 'error' : ''}`}
          type="number"
          data-testid="price"
          placeholder="Input flat price"
          {...register('price', { required: true, min: 0, max: 10000 })}
        />
        {errors.price && <span>Invalid Input</span>}
      </fieldset>

      <fieldset>
        <label className="form__label">Flat Description</label>
        <textarea
          className={`form__input form__input_type_descr ${errors.text ? 'error' : ''}`}
          placeholder="Input flat description"
          data-testid="descr"
          {...register('text', { required: true })}
        />
        {errors.text && <span>Invalid Input</span>}
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
            <input type="radio" className="form__input" name="persons" defaultChecked />
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
          data-testid="submit"
          disabled={Object.keys(errors).length !== 0 || !isDirty}
        />
      </fieldset>
    </form>
  );
};

export default Form;
