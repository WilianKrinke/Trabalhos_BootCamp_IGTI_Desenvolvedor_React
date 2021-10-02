import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../context/appContext';
import { getNumRodadaToStates } from '../../context/actions';
import rodadaGenerator from '../../utils/rodadaGenerator';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectRodada = () => {

    const [vetorRodadas, setvetorRodadas] = useState([]);    
    const context = useContext(GlobalStateContext);
    const {stateDispatch} = context;

    useEffect(() => {
        const rodadasValues = rodadaGenerator()
        setvetorRodadas(rodadasValues)
    }, []);

    const getSelectionRodadas = (e) => {
        const rodada = e.target.value
        getNumRodadaToStates(stateDispatch, rodada)      
    }

    return (
        <>
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
        </>
    );
}

export default SelectRodada;
