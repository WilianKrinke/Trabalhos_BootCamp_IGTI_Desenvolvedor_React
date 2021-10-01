import React from 'react';
import { FooterStyled, HeaderStyled, MainStyled } from './styled';
import { Link }from 'react-router-dom'
import DataComponent from '../../components/DataComponent/DataComponent';
import OptionComponent from '../../components/OptionComponent/OptionComponent';

const Home = () => {
    return (
        <>
            <HeaderStyled>
                <Link to="/secondpage">Ir para a segunda página</Link>
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
