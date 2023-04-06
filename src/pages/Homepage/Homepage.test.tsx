import React from 'react';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import matchers from '@testing-library/jest-dom/matchers';
import flickrFetchData from './../../data/flickrFetchData';

expect.extend(matchers);

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(flickrFetchData),
  })
);

describe('Search tests', () => {
  test('Should fetch cards', async () => {
    render(<Homepage />);
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const cards = screen.queryByTestId('cards') as HTMLUListElement;

    await waitFor(() => expect(cards.children.length).toBe(6));
  });

  test('Should have pending message when fetching and remove it after success', async () => {
    render(<Homepage />);
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const pending = screen.getByTestId('pending');

    expect(pending).toBeInTheDocument();
    await waitFor(() => expect(pending).not.toBeInTheDocument());
  });
});
