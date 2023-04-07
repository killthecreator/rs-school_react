import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import cardsData from './../../data/cardsData';

import Card from './Card';

describe('Card tests', () => {
  test('Should save card current state on mount', () => {
    const card = new Card({ ...cardsData[0] });
    expect(card.state.likes).toBe(cardsData[0].likes);
    expect(card.state.bookmarks).toBe(cardsData[0].bookmarks);
  });

  test('Should render Card component', () => {
    render(<Card {...cardsData[0]} />);
    const card = screen.getByTestId('card');
    expect(card).toBeDefined();
  });

  test('Should increase Card button value on click', async () => {
    render(<Card {...cardsData[0]} />);

    const bookmarks = screen.getByTestId('bookmarks');
    const curBookmarks = bookmarks.textContent as string;
    fireEvent.click(bookmarks);
    const newBookmarks = bookmarks.textContent as string;
    expect(+newBookmarks).toBe(+curBookmarks + 1);
  });
});
