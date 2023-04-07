import React from 'react';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './Searchbar';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('Searchbar tests', () => {
  const filterCardsMock = vi.fn();

  test('Should render Searchbar component', () => {
    render(<SearchBar filterCards={filterCardsMock} />);
    const form = screen.getByTestId('form');
    expect(form).toBeDefined();
  });

  test('Should input values', () => {
    render(<SearchBar filterCards={filterCardsMock} />);
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input).toHaveValue('test value');
  });

  test('Should save input to local storage on unmount', () => {
    const { unmount } = render(<SearchBar filterCards={filterCardsMock} />);
    unmount();
    expect(window.localStorage.searchValue).toBe('test value');
  });
});
