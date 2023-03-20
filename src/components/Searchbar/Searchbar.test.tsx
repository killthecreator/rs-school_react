import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './Searchbar';
import filterCards from './filterCards';

describe('Searchbar tests', () => {
  test('Should render Searchbar component', () => {
    render(<SearchBar filterCards={filterCards} />);
    const form = screen.getByTestId('form') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Should input values', () => {
    render(<SearchBar filterCards={filterCards} />);
    const input = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });

  test('Should save input to local storage on unmount', () => {
    const { unmount } = render(<SearchBar filterCards={filterCards} />);
    unmount();
    expect(window.localStorage.searchValue).toBe('test value');
  });
});
