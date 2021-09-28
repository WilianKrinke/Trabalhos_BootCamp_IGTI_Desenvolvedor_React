import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

describe('App Component Tests', () => {
    it('is rendering App', () => {
        render(<App />)
    });
});
