import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import matchers from '@testing-library/jest-dom/matchers';
import flickrFetchData from './../../data/flickrFetchData';
import * as flickrAPICall from './../../utils/FlickrAPICall';
import CardProps from './../../components/Card/CardProps';

expect.extend(matchers);

describe('Search tests', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  });
  test('Should fetch cards', async () => {
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const cards = screen.queryByTestId('cards') as HTMLUListElement;

    await waitFor(() => expect(cards.children).toHaveLength(6));
  });

  test('Should have pending message when fetching and remove it after success', async () => {
    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'cats' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const pending = screen.getByTestId('pending');

    expect(pending).toBeInTheDocument();
    await waitFor(() => expect(pending).not.toBeInTheDocument());
  });

  test('Should fetch 6 cards and display them', async () => {
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

  test('Should catch an error and show the message', async () => {
    vi.stubGlobal('fetch', () => {
      throw Error();
    });

    const input = screen.getByTestId('search');
    fireEvent.input(input, { target: { value: 'error' } });
    await waitFor(() => fireEvent.keyDown(input, { key: 'Enter' }));
    const error = screen.getByTestId('error');

    await waitFor(() => expect(error.textContent).toBe('Oops, something went wrong...'));
  });

  test('Should call fetch and handle an error', async () => {
    const mock = vi
      .spyOn(flickrAPICall, 'default')
      .mockImplementation(async (): Promise<CardProps[]> => {
        throw Error('test');
      });

    const input = screen.getByTestId('search');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => expect(mock).toHaveBeenCalledTimes(1));
  });
});
