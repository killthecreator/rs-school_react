import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/slices/pages/FormpageSlice';
import { RootState } from './../../redux/store';
import { setFormData, clearForm } from '../../redux/slices/components/FormSlice';

import CardProps from './../../components/Card/CardProps';
import FormData from './FormData';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: formData });

  const saveFormData = useCallback(() => dispatch(setFormData(getValues())), [dispatch, getValues]);

  useEffect(() => {
    reset(formData);
  }, [reset, formData]);

  useEffect(
    () => () => {
      saveFormData();
    },
    [saveFormData]
  );

  const onSubmit = (data: FormData) => {
    let fileLink;
    if (data.image && data.image[0]) fileLink = URL.createObjectURL(data.image[0]);
    const card: CardProps = {
      ...data,
      image: fileLink,
      bookmarks: 0,
      likes: 0,
    };
    dispatch(addCard(card));
    dispatch(clearForm());
    reset();
    alert('Card data has been saved');
  };

  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Flat image</label>
        <input
          className="w-64 py-1 px-2.5 cursor-pointer"
          type="file"
          placeholder="Attach flat image"
          accept="image/*"
          data-testid="file"
          {...register('image')}
        />
      </fieldset>

      <fieldset>
        <label>Flat Title</label>
        <input
          className={errors.title ? 'error' : ''}
          type="text"
          placeholder="Input flat name"
          data-testid="title"
          {...register('title', { required: 'Input title' })}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </fieldset>

      <fieldset>
        <label>Flat Price</label>
        <input
          className={errors.price ? 'error' : ''}
          type="number"
          data-testid="price"
          placeholder="Input flat price"
          {...register('price', { required: 'Input correct price', min: 1, max: 10000 })}
        />
        {errors.price && <span>{errors.price.message}</span>}
      </fieldset>

      <fieldset>
        <label>Flat Description</label>
        <textarea
          className={`h-fit ${errors.text ? 'error' : ''}`}
          placeholder="Input flat description"
          data-testid="descr"
          {...register('text', { required: 'Input description' })}
        />
        {errors.text && <span>{errors.text.message}</span>}
      </fieldset>

      <fieldset>
        <label>Date of arrival</label>
        <input
          type="date"
          className={errors.date ? 'error' : ''}
          placeholder="Input arrival date"
          data-testid="date"
          {...register('date', { required: 'Choose a date' })}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </fieldset>

      <fieldset>
        <label>Persons planning to live</label>
        <div>
          <div>
            <label className="text-xs">1</label>
            <input
              type="radio"
              className="w-5 h-5"
              value="1"
              data-testid="radio"
              {...register('persons', { required: 'Pick a number' })}
            />
          </div>
          <div>
            <label className="text-xs">2</label>
            <input type="radio" className="w-5 h-5" value="2" {...register('persons')} />
          </div>
          <div>
            <label className="text-xs"> &gt;2</label>
            <input type="radio" className="w-5 h-5" value=">2" {...register('persons')} />
          </div>
        </div>
        {errors.persons && <span>{errors.persons.message}</span>}
      </fieldset>

      <fieldset>
        <label>Special conditions</label>
        <div>
          <div>
            <label className="text-xs">Smoking allowed</label>
            <input type="checkbox" className="w-5 h-5" {...register('smoking')} />
          </div>
          <div>
            <label className="text-xs">Pets allowed</label>
            <input type="checkbox" className="w-5 h-5" {...register('pets')} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <label>Pick area</label>
        <select
          className="border border-solid border-black rounded-md"
          {...register('location', { required: 'Pick area' })}
          data-testid="select"
        >
          <option value="" hidden>
            Pick area
          </option>
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
        {errors.location && <span>{errors.location.message}</span>}
      </fieldset>

      <fieldset>
        <label>Submit your ad</label>
        <input
          className="text-center cursor-pointer border-black font-semibold"
          type="submit"
          value="Submit"
          data-testid="submit"
        />
      </fieldset>
    </form>
  );
};

export default Form;
