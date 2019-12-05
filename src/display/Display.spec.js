import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('that class is green-led',async () => {
   const wrapper = rtl.render(<Display/>);
   const element = wrapper.getByText('Unlocked')
   expect(element).toHaveClass('green-led');
});
