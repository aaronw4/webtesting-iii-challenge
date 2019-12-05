import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';

test('render without crashing', () => {
    const wrapper = rtl.render(<Controls/>);
    const element = wrapper.getByText(/Lock Gate/i);
    expect(element).toBeVisible();
 });
 
test('render without crashing', () => {
    const wrapper = rtl.render(<Controls/>);
    const element = wrapper.getByText(/Close Gate/i);
    expect(element).toBeVisible();
 });
 
test('button disabled', async () => {
    const wrapper = rtl.render(<Controls/>);
    const element = wrapper.getByText('Lock Gate');
    expect(element).toBeDisabled();
 });