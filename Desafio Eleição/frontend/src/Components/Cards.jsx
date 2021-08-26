/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { CardsStyled } from './styled/styled';

const Cards = ({nameCandidate,votes,indexArr,percentageVotes}) => {

    return (
        <CardsStyled>
            <div className='container'>
                <img src="" alt="Imagem" />
                <div className="container_info">
                    <p>{percentageVotes} % do votos</p>
                    <p>Votos Recebidos: {votes.toLocaleString('PT')}</p>
                </div>
            </div>
            <div className="container_nameinfo">
                <p>{nameCandidate}</p>
                <p>{indexArr === 0 ? 'Eleito' : 'Não Eleito'}</p>
            </div>
        </CardsStyled>
    );
}

export default Cards;
