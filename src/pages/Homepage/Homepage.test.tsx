import React from 'react';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import matchers from '@testing-library/jest-dom/matchers';
import flickrFetchData from './../../data/flickrFetchData';

expect.extend(matchers);

describe('Search tests', () => {
  test('Should fetch cards', async () => {
    render(<Homepage />);
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const cards = screen.queryByTestId('cards') as HTMLUListElement;

    await waitFor(() => expect(cards.children).toHaveLength(6));
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

  test('Should mock render mocked fetch cards', async () => {
    render(<Homepage />);

    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        json: () => Promise.resolve(flickrFetchData),
      })
    );

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'error' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    const cards = screen.getByTestId('cards');

    await waitFor(() => expect(cards.children).toHaveLength(flickrFetchData.photos.photo.length));
  });

  test('Should catch an error and show it as a message', async () => {
    render(<Homepage />);

    vi.stubGlobal('fetch', () => {
      throw Error('test error');
    });

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'error' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    const error = screen.getByTestId('error');

    expect(error.textContent).toBe('test error');
  });
});
