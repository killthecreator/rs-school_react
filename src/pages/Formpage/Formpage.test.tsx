import React from 'react';

import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import FormPage from './Formpage';

describe('Search tests', () => {
  let jsdomAlert: () => void;

  beforeEach(() => {
    jsdomAlert = window.alert;
    window.alert = () => {};
    render(<FormPage />);
  });

  afterEach(() => {
    window.alert = jsdomAlert;
  });

  test('Should render a card after form sumbit', async () => {
    const form = screen.getByTestId('form') as HTMLFormElement;

    const titleInput = screen.getByTestId('title');
    fireEvent.input(titleInput, { target: { value: 'test value' } });
    const submitBtn = screen.getByTestId('submit');
    fireEvent.click(submitBtn);

    const priceInput = screen.getByTestId('price');
    fireEvent.input(priceInput, { target: { value: 200 } });

    const descrInput = screen.getByTestId('descr');
    fireEvent.input(descrInput, { target: { value: 'test value' } });

    await waitFor(() => fireEvent.submit(form));

    const card = screen.getByTestId('card');
    await waitFor(() => expect(card).toBeDefined());
  });
});
