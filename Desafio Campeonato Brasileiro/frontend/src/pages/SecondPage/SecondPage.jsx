import React from 'react';
import { Link } from 'react-router-dom';
import {FooterStyled, HeaderStyled, MainStyled} from '../Home/styled'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const SecondPage = () => {
    return (
        <>
            <HeaderStyled>
                <Link to="/thirdpage">Ir para a terceira página</Link>
                <h1>Second Page</h1>
            </HeaderStyled>
            <MainStyled>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <span> / </span>
                    <Breadcrumb.Item active>Second Page</Breadcrumb.Item>
                </Breadcrumb>
                <h3>Nenhum conteudo, pois quero demostrar o componente breadcrumb</h3>
            </MainStyled>
            <FooterStyled />
        </>
    );
}

export default SecondPage;
