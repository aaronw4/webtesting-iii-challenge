import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('render without crashing', () => {
   const wrapper = rtl.render(<Dashboard/>);
   const element = wrapper.getByText(/Open/i);
   expect(element).toBeVisible();
});

test('render without crashing', () => {
    const wrapper = rtl.render(<Dashboard/>);
    const element = wrapper.getByText(/Unlocked/i);
    expect(element).toBeVisible();
 });
 