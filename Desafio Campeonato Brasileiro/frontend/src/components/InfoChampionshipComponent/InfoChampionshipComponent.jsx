import React from 'react';

const InfoChampionshipComponent = ({anoDoCampeonato, rodada}) => {
    return (
        <>
            <h3>Campeonato Brasileiro de {anoDoCampeonato}</h3>
            <h3>{rodada}ª Rodada</h3>
        </>
    );
}

export default InfoChampionshipComponent;
