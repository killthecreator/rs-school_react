import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Homepage from './Homepage';
import matchers from '@testing-library/jest-dom/matchers';

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
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    waitFor(() => {
      const cards = screen.getByTestId('cards');
      expect(cards.children).toHaveLength(6);
    });
  });
});
