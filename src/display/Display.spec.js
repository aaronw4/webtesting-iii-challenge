import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Dashboard';

test('render without crashing', () => {
   const wrapper = rtl.render(<Display/>);
   const element = wrapper.getByText('Locked');
   expect(element).toBeDisabled();
});
