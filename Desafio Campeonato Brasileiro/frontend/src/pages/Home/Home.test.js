import React from 'react';
import Home from './Home';
import {render, screen} from '../../tests'

describe('Home Component Tests', () => {
    it('is rendering Home with title Desafio React Campeonato Brasileiro', () => {
        render(<Home />)

        expect(screen.getByText('Desafio React Campeonato Brasileiro')).toBeInTheDocument()
    });
});





