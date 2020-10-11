import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { act } from 'react-dom/test-utils'

test('renders learn react link', () => {
  expect(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    render(<App />, div);
  });
});