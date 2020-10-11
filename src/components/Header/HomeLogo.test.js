import React from 'react';
import { render } from 'react-dom';
import { HomeLogo } from '../Header/HomeLogo';
import { act } from 'react-dom/test-utils'

it('renders without crashing', () => {
    const div = document.createElement('div');
    act(() => {
        render(<HomeLogo />, div);
    });
    expect(div.querySelector("h1").textContent).toBe("Etoile Sportive Tourville")
});