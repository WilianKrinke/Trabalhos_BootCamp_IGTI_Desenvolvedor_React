import React from 'react';
import { FooterStyled, HeaderStyled, MainStyled } from '../Home/styled';
import { Img404Styled } from './styled';
import { useHistory } from 'react-router';
import Image404 from '../../assets/404.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NotFound = () => {

    const history = useHistory()
    function toTheHome() {
        history.push("/")
    }

    return (
        <>
            <HeaderStyled>
                <span>Oops! Não Achamos esta página. Gostaria de ir à página principal?</span>
                <Stack direction="row">
                    <Button variant="outlined" onClick={() => toTheHome()}>Yes</Button>
                </Stack>
            </HeaderStyled>
            <MainStyled>
                <Img404Styled src={Image404} alt="Not Found" />
            </MainStyled>
            <FooterStyled />
        </>
    );
}

export default NotFound;
