import React from 'react';
import * rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('render without crashing', () => {
   const wrapper = rtl.render(<Dashboard/>);
   const element = wrapper.getByText(/open/i);
   expect(element).toBeVisible();
});