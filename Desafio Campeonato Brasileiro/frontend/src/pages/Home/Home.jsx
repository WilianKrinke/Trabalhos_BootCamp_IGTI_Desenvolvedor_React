import React from 'react';
import { FooterStyled, HeaderStyled, MainStyled } from './styled';
import DataComponent from '../../components/DataComponent/DataComponent';
import OptionComponent from '../../components/OptionComponent/OptionComponent';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import LinkToPage from '../../components/LinkToPage/LinkToPage';

const Home = () => {
    return (
        <>
            <HeaderStyled>
                <HeaderTitle title={'Desafio React Campeonato Brasileiro'}/>

                <LinkToPage url="/secondpage" title={'Segunda Página'}/>
            </HeaderStyled>
            <MainStyled>
                <OptionComponent />

                <DataComponent />
            </MainStyled>
            <FooterStyled />
        </>
    );
}

export default Home;
