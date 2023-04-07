import React from 'react';

import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import matchers from '@testing-library/jest-dom/matchers';
import flickrFetchData from './../../data/flickrFetchData';
import * as flickrAPICall from './../../utils/FlickrAPICall';
import CardProps from './../../components/Card/CardProps';

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

  test('Should fetch 6 cards and display them', async () => {
    render(<Homepage />);

    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        json: () => Promise.resolve(flickrFetchData),
      })
    );

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'error' } });
    await waitFor(() => fireEvent.keyDown(input, { key: 'Enter' }));
    const cards = screen.getByTestId('cards');

    await waitFor(() => expect(cards.children).toHaveLength(6));
  });

  test('Should catch an error and show it as a message', async () => {
    render(<Homepage />);

    vi.stubGlobal('fetch', () => {
      throw Error('test error message');
    });

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'error' } });
    await waitFor(() => fireEvent.keyDown(input, { key: 'Enter' }));
    const error = screen.getByTestId('error');

    await waitFor(() => expect(error.textContent).toBe('test error message'));
  });

  test('Should call fetch and handle an error', async () => {
    const mock = vi
      .spyOn(flickrAPICall, 'default')
      .mockImplementation(async (): Promise<CardProps[]> => {
        throw Error('test');
      });

    render(<Homepage />);

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => expect(mock).toHaveBeenCalledTimes(1));
  });
});
