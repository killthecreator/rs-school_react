import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import FormPage from './Formpage';

describe('Search tests', () => {
  let jsdomAlert: () => void;

  beforeEach(() => {
    jsdomAlert = window.alert;
    window.alert = () => {};
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
  });

  afterEach(() => {
    window.alert = jsdomAlert;
  });

  test('Should render a card after form sumbit', async () => {
    const form = screen.getByTestId('form') as HTMLFormElement;

    const titleInput = screen.getByTestId('title');
    fireEvent.input(titleInput, { target: { value: 'test value' } });

    const priceInput = screen.getByTestId('price');
    fireEvent.input(priceInput, { target: { value: 200 } });

    const descrInput = screen.getByTestId('descr');
    fireEvent.input(descrInput, { target: { value: 'test value' } });

    const dateInput = screen.getByTestId('date');
    fireEvent.change(dateInput, { target: { value: '2020-12-11' } });

    const radioInput = screen.getByTestId('radio');
    fireEvent.input(radioInput, { target: { checked: true } });

    const selectInput = screen.getByTestId('select');
    fireEvent.change(selectInput, { target: { value: 'Bemowo' } });

    await waitFor(() => fireEvent.submit(form));

    const card = screen.getByTestId('card');
    await waitFor(() => expect(card).toBeDefined());
  });
});
