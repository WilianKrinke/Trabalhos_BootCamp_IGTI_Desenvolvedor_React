import React, { useEffect, useState } from 'react';
import ChooseCountry from './ChooseCountry';
import CountryInfo from './CountryInfo';
import { SectionElectionsInfo } from './styled/styled';
import { getCountrys } from '../Utils/getCountries'

const ElectionInfo = ({getIdSelect,numCandidates}) => {
    const [datasCountries, setDatasCountries] = useState([]);
    const [valueGetUp, setValueGetUp] = useState('');
    
    function StateLifted(idLifted) {
        setValueGetUp(idLifted)
        getIdSelect(idLifted)
    }

    

    useEffect(() => {
        getCountrys().then(itens => setDatasCountries(itens))
    }, []);

    return (
        <SectionElectionsInfo>            
            <ChooseCountry infos={datasCountries.map(item => item)} onGetState={StateLifted}/>              
            <CountryInfo infos={datasCountries.map(item => item)} idSelect={valueGetUp} numCandidates={numCandidates}/>
        </SectionElectionsInfo>
    );
}

export default ElectionInfo;
