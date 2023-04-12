import store from './store';
import {
  setFormData,
  clearForm,
  initialState as formSliceInit,
  formSlice,
} from './slices/components/FormSlice';
import {
  setInputedValue,
  initialState as searchbarSliceInit,
  searchbarSlice,
} from './slices/components/SearchbarSlice';
import {
  addCard,
  initialState as FormpageSliceInit,
  formpageSlice,
} from './slices/pages/FormpageSlice';
import {
  setActiveCards,
  initialState as homepageSliceInit,
  homepageSlice,
} from './slices/pages/HomepageSlice';
import { cardsData } from './../data/cardsData';

import { describe, test, expect } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('Redux tests', () => {
  test('FormSlice tests', () => {
    const formDataMock = {
      title: 'test',
      image: undefined,
      persons: 'test',
      price: '1',
      text: 'test',
      location: 'test',
      date: '1',
      smoking: true,
      pets: true,
    };

    expect(formSlice.getInitialState()).toEqual(formSliceInit);
    store.dispatch(setFormData(formDataMock));
    expect(store.getState().form).toEqual(formDataMock);
    store.dispatch(clearForm());
    expect(store.getState().form).toEqual(formSlice.getInitialState());
  });

  test('SearchbarSlice tests', () => {
    expect(searchbarSlice.getInitialState()).toEqual(searchbarSliceInit);
    store.dispatch(setInputedValue('test'));
    expect(store.getState().searchbar.inputedValue).toEqual('test');
  });

  test('FormpageSlice tests', () => {
    expect(formpageSlice.getInitialState()).toEqual(FormpageSliceInit);
    store.dispatch(addCard(cardsData[0]));
    expect(store.getState().formpage.activeCards[0]).toEqual(cardsData[0]);
  });

  test('HomepageSlice tests', () => {
    expect(homepageSlice.getInitialState()).toEqual(homepageSliceInit);
    store.dispatch(setActiveCards(cardsData));
    expect(store.getState().homepage.activeCards).toEqual(cardsData);
  });
});
