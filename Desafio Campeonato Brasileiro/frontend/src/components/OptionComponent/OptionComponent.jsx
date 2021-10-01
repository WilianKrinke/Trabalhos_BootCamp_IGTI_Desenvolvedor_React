import React, { useContext, useEffect, useState } from 'react';
import { getNumRodadaToStates, getYearToStates } from '../../context/actions';
import { GlobalStateContext } from '../../context/appContext';
import { StyledSectionInfo, StyledSectionOptions } from './styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import rodadaGenerator from '../../utils/rodadaGenerator';
import yearGenerator from '../../utils/yearGenerator';

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
                <article>
                    <FormControl variant="standard" sx={{ m: 5, minWidth: 140 }}>
                        <InputLabel id="demo-simple-select-standard-label">Escolha um Ano</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            onChange={e => getSelectionYear(e)}
                            label="year"
                            defaultValue=""
                        >
                            {
                                vetorYears.length === 0 ?
                                    <MenuItem value="loading">Loading...</MenuItem>
                                :
                                    vetorYears.map(item => {
                                        return (
                                            <MenuItem value={item} key={item}>{item}</MenuItem>
                                        )
                                    })
                            }                        
                        </Select>
                    </FormControl>
                </article>            

                <article>
                    <FormControl variant="standard" sx={{ m: 5, minWidth: 180 }}>
                        <InputLabel id="demo-simple-select-standard-label">Escolha uma Rodada</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            onChange={e => getSelectionRodadas(e)}
                            label="rodada"
                            defaultValue=""
                        >
                            {
                                vetorRodadas.length === 0 ?
                                    <MenuItem value="Loading...">Loading...</MenuItem>
                                :   
                                    vetorRodadas.map(item => {
                                        return (                                       
                                            <MenuItem value={item} key={item}>{item}</MenuItem>
                                        )
                                    })
                            }                     
                        </Select>
                    </FormControl>
                </article>
            </StyledSectionOptions>

            <StyledSectionInfo>
                    <h3>Campeonato Brasileiro de {anoDoCampeonato}</h3>
                    <h3>{rodada}ª Rodada</h3>
            </StyledSectionInfo>
        </>
    );
}

export default OptionComponent;
