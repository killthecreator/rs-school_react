import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import noImage from './../../assets/no-image.jpg';

export default (props: FormProps) => {
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);

  let fileLink = '';

  const { register, handleSubmit, reset } = useForm<CardProps>();

  const onSubmit = (data: CardProps) => {
    const card = { ...data, image: fileLink ? fileLink : noImage, bookmarks: 0, likes: 0 };
    props.addCard(card);
    alert('Card data has been saved');
    fileLink = '';
    reset();
  };

  /*  const handleSubmit = async (e: React.SyntheticEvent) => {


    if (!required) {
      await setRequired(true);
      await checkFormValidation();
      if (disabled) return;
    }

    setDisabled(true);
    setRequired(false);
  }; */

  const handleFileInput = (e: React.SyntheticEvent) => {
    const reader = new FileReader();
    const target = e.target as HTMLInputElement;

    if (target.files) {
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const readerTarget = e.target as FileReader;
        fileLink = readerTarget.result?.toString() as string;
      };

      reader.readAsDataURL(target.files[0]);
    }
  };

  /*   const checkFormValidation = () => {
    setDisabled(form.current?.checkValidity() ? false : true);
  }; */

  return (
    <form
      className="form"
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
      /* onChange={checkFormValidation} */
    >
      <fieldset>
        <label className="form__label">Flat image</label>
        <input
          className="form__input form__input_type_file"
          type="file"
          placeholder="Attach flat image"
          accept="image/*"
          data-testid="file"
          {...register('image', { onChange: handleFileInput })}
        />
      </fieldset>

      <fieldset>
        <label className="form__label">Flat Title</label>
        <input
          className="form__input form__input_type_title"
          type="text"
          placeholder="Input flat name"
          data-testid="title"
          {...register('title', { required: required })}
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
          {...register('price', { required: required })}
        />
        <span>Invalid Input</span>
      </fieldset>

      <fieldset>
        <label className="form__label">Flat Description</label>
        <textarea
          className="form__input form__input_type_descr"
          placeholder="Input flat description"
          data-testid="descr"
          {...register('text', { required: required })}
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
          disabled={disabled}
          data-testid="submit"
        />
      </fieldset>
    </form>
  );
};
