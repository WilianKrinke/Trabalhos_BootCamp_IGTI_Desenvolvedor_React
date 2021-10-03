import React from "react";
import LinkToPage from "./LinkToPage";
import renderer from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

describe('LinkToPage test component', () => {
    it('should render component with props "url=/secondpage" and "title=Segunda Página"', () => {

        const {getByTestId} = render(
                <BrowserRouter>
                    <LinkToPage url="/secondpage" title="Segunda Página"/>
                </BrowserRouter>
            )
        
        expect(getByTestId('routerlink')).toHaveTextContent("Segunda Página")        
        expect(screen.getByRole('link')).toHaveAttribute('href', '/secondpage');  
    });
    
    it('should render component with props "url=/thirdpage" and "title=Terceira Página"', () => {

        const {getByTestId} = render(
                <BrowserRouter>
                    <LinkToPage url="/thirdpage" title="Terceira Página"/>
                </BrowserRouter>
            )
        
        expect(getByTestId('routerlink')).toHaveTextContent("Terceira Página")        
        expect(screen.getByRole('link')).toHaveAttribute('href', '/thirdpage');  
    });
    
    it('matches snapshot 1', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <LinkToPage url="/secondpage" title="Segunda Página"/>
            </BrowserRouter>
        ).toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('matches snapshot 2', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <LinkToPage url="/thirdpage" title="Terceira Página"/>
            </BrowserRouter>
        ).toJSON()
        expect(tree).toMatchSnapshot();
    });
    
});
