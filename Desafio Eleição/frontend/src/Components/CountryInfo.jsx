import React, { useEffect, useState } from 'react';
import { CountryInfoStyled } from './styled/styled';

const CountryInfo = ({infos, idSelect,numCandidates}) => {

    const [dataInfos, setdataInfos] = useState([]);   

    useEffect(() => {
        const cityDatas = infos.filter(item => item.id === idSelect && item.name)
        setdataInfos(cityDatas)
    }, [infos, idSelect]);

    return (
        <CountryInfoStyled>
            <p>Eleição em: {dataInfos.map(item => item.name)}</p>
                <div className="infos">
                    <p>Total de Eleitores: {dataInfos.map(item => item.votingPopulation.toLocaleString('PT'))}</p>
                    <p>Abstenção: {dataInfos.map(item => item.absence.toLocaleString('PT'))}</p>
                    <p>Comparecimento: {dataInfos.map(item => item.presence.toLocaleString('PT'))}</p>
                </div>
            <p>{dataInfos.map(item => item.name)} possui {numCandidates} candidatos</p>
        </CountryInfoStyled>
    );
}

export default CountryInfo;
