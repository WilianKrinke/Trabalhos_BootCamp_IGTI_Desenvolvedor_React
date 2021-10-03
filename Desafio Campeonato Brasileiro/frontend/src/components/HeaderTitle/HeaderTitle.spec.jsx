import React from "react";
import renderer from 'react-test-renderer'
import HeaderTitle from './HeaderTitle'
import {render, screen} from '@testing-library/react'

describe('HeaderTitle test component', () => {
    it('should render header title', () => {        
        render(<HeaderTitle title={'Desafio React Campeonato Brasileiro'}/>)

        const h1Element = screen.getByText(/desafio react campeonato brasileiro/i)
        expect(h1Element).toBeInTheDocument();
    });

    it('matches snapshot 1', () => {
        const tree = renderer.create(
            <HeaderTitle title={'Desafio React Campeonato Brasileiro'}/>
        ).toJSON()
        expect(tree).toMatchSnapshot();
    });
});
