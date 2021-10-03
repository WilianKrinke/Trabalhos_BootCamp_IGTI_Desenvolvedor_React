import React from 'react';
import { number } from 'prop-types';

const InfoChampionshipComponent = ({anoDoCampeonato, rodada}) => {
    return (
        <>
            <h3>Campeonato Brasileiro de {anoDoCampeonato}</h3>
            <h3>{rodada}ª Rodada</h3>
        </>
    );
}

InfoChampionshipComponent.propTypes = {
    anoDoCampeonato: number.isRequired,
    rodada: number.isRequired
}


export default InfoChampionshipComponent;
