import React from 'react';

import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import cardsData from './../../data/cardsData';

import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('Search tests', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  test('Should filter cards', async () => {
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: cardsData[0].title } });

    const cards = screen.getByTestId('cards');
    await waitFor(() => expect(cards.children.length).toBe(1));
  });
});
