import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';

import Cards from '../src/components/Cards';
import Form from '../src/components/Form';
import FormPage from './../src/pages/Formpage';

describe('Search tests', () => {
  test('Should render Form component', () => {
    render(<Form addCard={() => {}} />);
    const form = screen.getByLabelText('form') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Should render Form component', () => {
    render(<Form addCard={() => {}} />);
    const form = screen.getByLabelText('form') as HTMLFormElement;
    expect(form).toBeDefined();
  });
});

describe('Cards tests', () => {
  console.log(1);
});
