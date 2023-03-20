import React from 'react';

import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Cards from '../src/components/Cards/Cards';
import Form from '../src/components/Form/Form';
import FormPage from '../src/pages/Formpage/Formpage';

describe('Search tests', () => {
  beforeEach(() => {
    render(<FormPage />);
  });

  test('Should render Form component', () => {
    const form = screen.getByTestId('form') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Should render Form component', () => {
    const titleInput = screen.getByTestId('title');
    expect(titleInput).toBeDefined();
    fireEvent.input(titleInput, { target: { value: 'title' } });
    expect(titleInput).toHaveValue('title');

    const priceInput = screen.getByTestId('price');
    fireEvent.input(titleInput, { target: { value: 1000 } });

    const descrInput = screen.getByTestId('price');
    fireEvent.input(descrInput, { target: { value: 'descr' } });

    const submitInput = screen.getByTestId('submit');
    fireEvent.submit(submitInput);

    expect(submitInput).toBeDisabled();
  });
});
