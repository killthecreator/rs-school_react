import React from 'react';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Form from './Form';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

const mockDispatchFn = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof redux>('react-redux');
  return {
    ...actual,
    useDispatch: () => mockDispatchFn,
  };
});

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

  test('Should toggle classList error state when input is invalid', async () => {
    const titleInput = screen.getByTestId('title');
    const priceInput = screen.getByTestId('price');
    fireEvent.input(priceInput, { target: { value: 200 } });
    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => expect(titleInput.classList).toHaveLength(1));
  });

  test('Should call dispatch 2 times when submittin the form', async () => {
    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => expect(mockDispatchFn).toHaveBeenCalledTimes(1));
  });

  test('Should call dispatch 2 times when submitting the form', async () => {
    const onSubmit = vi.fn((e) => e.preventDefault());
    const form = screen.getByTestId('form');
    form.onsubmit = onSubmit;
    fireEvent.submit(form);

    await waitFor(() => expect(onSubmit).toBeCalled());
  });
});
