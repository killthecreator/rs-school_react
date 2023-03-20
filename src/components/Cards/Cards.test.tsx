import React from 'react';

import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import Cards from './Cards';

import cardsData from './../../data/cardsData';

describe('Cards tests', () => {
  test('Should render Card list component', () => {
    const { container } = render(<Cards cards={cardsData} />);
    const numberOfCards = container.querySelectorAll('li');
    expect(numberOfCards.length).toBe(cardsData.length);
  });
});
