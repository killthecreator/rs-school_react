import React from 'react';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SearchBar from './Searchbar';

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

describe('Searchbar tests', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
  test('Should render Searchbar component', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeDefined();
  });

  test('Should input values', () => {
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input).toHaveValue('test value');
  });

  test('Should dispatch setSearchValue on search submit', async () => {
    const useDispatchSpy = vi.spyOn(redux, 'useDispatch');

    const input = screen.getByTestId('search');
    fireEvent.keyDown(input, { key: 'Enter' });
    await waitFor(() => expect(useDispatchSpy).toHaveBeenCalledTimes(1));
  });
});
