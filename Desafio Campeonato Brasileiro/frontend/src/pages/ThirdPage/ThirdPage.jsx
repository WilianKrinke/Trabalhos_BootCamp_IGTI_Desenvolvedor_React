import React from 'react';
import { FooterStyled, HeaderStyled, MainStyled } from '../Home/styled';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import LinkToPage from '../../components/LinkToPage/LinkToPage';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

const ThirdPage = () => {
    return (
        <>
            <HeaderStyled>
                <HeaderTitle title={'Desafio React Campeonato Brasileiro'}/>
                <LinkToPage url={'/secondpage'} title={'Segunda Página'}/>
            </HeaderStyled>
            <MainStyled>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <span> &gt; </span>
                    <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>
                    <span> &gt; </span>
                    <Breadcrumb.Item active>Second Page</Breadcrumb.Item>
                </Breadcrumb>
                <h3>Nenhum conteudo, pois quero demostrar o breadcrumb</h3>
            </MainStyled>
            <FooterStyled />
        </>
    );
}

export default ThirdPage;
