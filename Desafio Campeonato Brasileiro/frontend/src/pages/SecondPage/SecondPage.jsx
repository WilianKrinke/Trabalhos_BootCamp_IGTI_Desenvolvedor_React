import React from 'react';
import {FooterStyled, HeaderStyled, MainStyled} from '../Home/styled'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import LinkToPage from '../../components/LinkToPage/LinkToPage';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

const SecondPage = () => {
    return (
        <>
            <HeaderStyled>
                <HeaderTitle title={'Desafio React Campeonato Brasileiro'}/>
                <LinkToPage url={"/thirdpage"} title={"Terceira Página"}/>
            </HeaderStyled>
            <MainStyled>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <span> &gt; </span>
                    <Breadcrumb.Item active>Second Page</Breadcrumb.Item>
                </Breadcrumb>
                <h3>Nenhum conteudo, pois quero demostrar o breadcrumb</h3>
            </MainStyled>
            <FooterStyled />
        </>
    );
}

export default SecondPage;
