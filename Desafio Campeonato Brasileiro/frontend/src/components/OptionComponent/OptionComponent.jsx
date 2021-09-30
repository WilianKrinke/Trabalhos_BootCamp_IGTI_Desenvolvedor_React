import React, { useContext, useEffect, useState } from 'react';
import { getNumRodadaToStates, getYearToStates } from '../../context/actions';
import { GlobalStateContext } from '../../context/appContext';
import rodadaGenerator from '../../utils/rodadaGenerator';
import yearGenerator from '../../utils/yearGenerator';
import { StyledSectionInfo, StyledSectionOptions } from './styled';

const OptionComponent = () => {
    const [vetorYears, setvetorYears] = useState([]);
    const [vetorRodadas, setvetorRodadas] = useState([]);
    
    const context = useContext(GlobalStateContext);
    const {state: {anoDoCampeonato, rodada}, stateDispatch} = context;

    useEffect(() => {
        const yearsValues = yearGenerator()
        const rodadasValues = rodadaGenerator()
        
        setvetorYears(yearsValues)
        setvetorRodadas(rodadasValues)
    }, []);
    
    const getSelectionYear = (e) => {
        const year = e.target.value 
        getYearToStates(stateDispatch, year)       
        
    }

    const getSelectionRodadas = (e) => {
        const rodada = e.target.value
        getNumRodadaToStates(stateDispatch, rodada)      
    }

    return (
        <>
            <StyledSectionOptions>            
                <p>Escolha um Ano:</p>
                <select name="year" onChange={e => getSelectionYear(e)}>
                    {
                        vetorYears.length === 0 ?
                            <option value="loading">Loading...</option>
                        :
                            vetorYears.map(item => {
                                return (
                                    <option value={item} key={item}>{item}</option>
                                )
                            })
                    }
                </select>

                <p>Escolha uma rodada:</p>
                <select name="rodada" onChange={e => getSelectionRodadas(e)}>
                    {
                        vetorRodadas.length === 0 ?
                            <option value="loading">Loading...</option>
                        :
                        vetorRodadas.map(item => {
                            return (
                                <option value={item} key={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </StyledSectionOptions>

            <StyledSectionInfo>
                    <h3>Campeonato Brasileiro de {anoDoCampeonato}</h3>
                    <h3>{rodada}ª Rodada</h3>
            </StyledSectionInfo>
        </>
    );
}

export default OptionComponent;
