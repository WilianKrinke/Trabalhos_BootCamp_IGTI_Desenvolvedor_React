import React, { useContext, useEffect, useState } from 'react';
import { getYearToStates } from '../../context/actions';
import { GlobalStateContext } from '../../context/appContext';
import yearGenerator from '../../utils/yearGenerator';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectYear = () => {
    const [vetorYears, setvetorYears] = useState([]);

    const context = useContext(GlobalStateContext);
    const {stateDispatch} = context;

    const getSelectionYear = (e) => {
        const year = e.target.value 
        getYearToStates(stateDispatch, year)         
    }

    useEffect(() => {
        const yearsValues = yearGenerator()
        setvetorYears(yearsValues)
    }, []);

    return (
        <>
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
        </>
    );
}

export default SelectYear;
