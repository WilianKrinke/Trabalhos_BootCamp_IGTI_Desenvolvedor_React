import React from 'react';
import DataComponent from '../../components/DataComponent/DataComponent';
import OptionComponent from '../../components/OptionComponent/OptionComponent';
import { FooterStyled, HeaderStyled, MainStyled } from './styled';

const Home = () => {
    return (
        <>
            <HeaderStyled>
                <h1>Desafio React Campeonato Brasileiro</h1>
            </HeaderStyled>
            <MainStyled>
                <OptionComponent />
                <DataComponent />
            </MainStyled>
            <FooterStyled>

            </FooterStyled>
        </>
    );
}

export default Home;
