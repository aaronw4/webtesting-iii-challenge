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
 
test('Lock Gate button disabled', async () => {
    const wrapper = rtl.render(<Controls/>);
    const element = wrapper.getByText('Lock Gate');
    expect(element).toBeDisabled();
 });
 
test('Close Gate button is working', async () => {
    const wrapper = rtl.render(<Controls/>);
    const element = wrapper.getByText('Close Gate');
    expect(element).not.toBeDisabled();
 });