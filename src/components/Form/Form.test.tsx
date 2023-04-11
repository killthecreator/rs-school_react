import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('Form tests', () => {
  let jsdomAlert: () => void;

  beforeEach(() => {
    jsdomAlert = window.alert;
    window.alert = () => {};
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  afterEach(() => {
    window.alert = jsdomAlert;
  });

  test('Should render Form component', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeDefined();
  });

  test('Should toggle classList error state when input is invalid', async () => {
    const titleInput = screen.getByTestId('title');
    const priceInput = screen.getByTestId('price');
    fireEvent.input(priceInput, { target: { value: 200 } });
    const submitBtn = screen.getByTestId('submit');
    fireEvent.click(submitBtn);

    await waitFor(() => expect(titleInput.classList).toHaveLength(2));
  });
});
