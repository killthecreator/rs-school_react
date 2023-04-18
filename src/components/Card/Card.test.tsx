import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import cardsData from './../../data/cardsData';

import Card from './Card';

describe('Card tests', () => {
  test('Should save card current state on mount', () => {
    render(<Card {...cardsData[0]} />);
    const likes = screen.getByTestId('likes');
    const bookmarks = screen.getByTestId('bookmarks');

    expect(+(likes.textContent as string)).toBe(cardsData[0].likes);
    expect(+(bookmarks.textContent as string)).toBe(cardsData[0].bookmarks);
  });

  test('Should render Card component', () => {
    render(<Card {...cardsData[0]} />);
    const card = screen.getByTestId('card');
    expect(card).toBeDefined();
  });

  test('Should increase Card button value on click and set active state to it', () => {
    render(<Card {...cardsData[0]} />);

    const bookmarks = screen.getByTestId('bookmarks');
    const curBookmarks = bookmarks.textContent as string;
    fireEvent.click(bookmarks);
    const newBookmarks = bookmarks.textContent as string;
    expect(+newBookmarks).toBe(+curBookmarks + 1);
    expect(bookmarks.classList).toHaveLength(2);
  });
});
