import React from 'react';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form, { handleFileInput } from './Form';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('Form tests', () => {
  const addCardMock = vi.fn(() => {
    return;
  });
  let jsdomAlert: () => void;

  beforeEach(() => {
    jsdomAlert = window.alert;
    window.alert = () => {};
    render(<Form addCard={addCardMock} />);
  });

  afterEach(() => {
    window.alert = jsdomAlert;
  });

  test('Should render Form component', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeDefined();
  });

  test('Should enable submit button on first input', async () => {
    const titleInput = screen.getByTestId('title');
    fireEvent.input(titleInput, { target: { value: 'test value' } });
    const submitBtn = screen.getByTestId('submit');

    await waitFor(() => expect(submitBtn).toBeEnabled());
  });

  test('Should disable button after submit if input is invalid', async () => {
    const titleInput = screen.getByTestId('title');
    fireEvent.input(titleInput, { target: { value: 'test value' } });
    const submitBtn = screen.getByTestId('submit');
    fireEvent.click(submitBtn);

    await waitFor(() => expect(submitBtn).toBeDisabled());
  });

  test('Should enable button after all required inputs are valid', async () => {
    const titleInput = screen.getByTestId('title');
    fireEvent.input(titleInput, { target: { value: 'test value' } });
    const submitBtn = screen.getByTestId('submit');
    fireEvent.click(submitBtn);

    const priceInput = screen.getByTestId('price');
    fireEvent.input(priceInput, { target: { value: 200 } });

    const descrInput = screen.getByTestId('descr');
    fireEvent.input(descrInput, { target: { value: 'test value' } });

    await waitFor(() => expect(submitBtn).toBeEnabled());
  });

  test('Should upload file with input file', async () => {
    const fileInput = screen.getByTestId('file') as HTMLInputElement;
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);

    if (fileInput.files) {
      expect(fileInput.files[0]).toStrictEqual(file);
    }
  });
});
