import React from 'react'
import InfoChampionshipComponent from './InfoChampionshipComponent'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import {render, screen} from '@testing-library/react'

describe('InfoChampionshipComponent test component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<InfoChampionshipComponent anoDoCampeonato={2006} rodada={38}/>,div)
    });

    it('should render with texts', () => {
        render(<InfoChampionshipComponent anoDoCampeonato={2006} rodada={38}/>)

        const h3ElementAno = screen.getByText(/Campeonato Brasileiro de 2006/i)
        expect(h3ElementAno).toBeInTheDocument();
        
        const h3ElementRodada = screen.getByText(/38ª Rodada/i)
        expect(h3ElementRodada).toBeInTheDocument();
    });

    it('matches snapshot 1', () => {
        const tree = renderer.create(
            <InfoChampionshipComponent anoDoCampeonato={2006} rodada={38}/>
        ).toJSON()
        expect(tree).toMatchSnapshot();
    });
    
});



