import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';

import SearchBar from './../src/components/Searchbar';
import Card from './../src/components/Card';
import Cards from './../src/components/Cards';

import cardsData from './../src/data/cardsData';

describe('Search tests', () => {
  test('Should render Search component', () => {
    render(<SearchBar />);
    const form = screen.getByLabelText('form') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Should input values', () => {
    render(<SearchBar />);
    const input = screen.getByLabelText('input') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });
  test('Should save input to local storage on unmount', () => {
    const { unmount } = render(<SearchBar />);
    unmount();
    expect(window.localStorage.searchValue).toBe('test value');
  });
});

describe('Cards tests', () => {
  test('Should save card current state on mount', () => {
    const card = new Card({ ...cardsData[0] });
    expect(card.state.likes).toBe(cardsData[0].likes);
    expect(card.state.bookmarks).toBe(cardsData[0].bookmarks);
  });

  test('Should render Card component', () => {
    render(<Card {...cardsData[0]} />);
    const card = screen.getByLabelText('card');
    expect(card).toBeDefined();
  });

  test('Should increase Card button value on click', () => {
    const { container } = render(<Card {...cardsData[0]} />);
    const bookmarks = container.querySelector('[data-btntype="bookmarks"]') as HTMLButtonElement;
    const curBookmarks = bookmarks.textContent as string;
    fireEvent.click(bookmarks);
    const newBookmarks = bookmarks.textContent as string;
    expect(+newBookmarks).toBe(+curBookmarks + 1);
  });

  test('Should render Card list component', () => {
    const { container } = render(<Cards {...cardsData} />);
    const numberOfCards = container.querySelectorAll('li');
    expect(numberOfCards.length).toBe(cardsData.length);
  });
});
