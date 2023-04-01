import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';

import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('Search tests', () => {
  test('Should fetch cards', () => {
    render(<Homepage />);
    const input = screen.getByTestId('search');
    waitFor(() => fireEvent.input(input, { target: { value: 'cats' } }));
    waitFor(() => fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 }));

    const cards = screen.queryByTestId('cards') as HTMLUListElement;

    waitFor(() => expect(cards.children.length).toBe(6));
  });

  test('Should have pending message when fetching and remove it after success', () => {
    render(<Homepage />);
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const pending = screen.getByTestId('pending');

    expect(pending).toBeInTheDocument();
    waitFor(() => expect(pending).toNotBeInTheDocument());
  });
});
