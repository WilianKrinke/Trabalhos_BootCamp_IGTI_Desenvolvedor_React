import React from 'react';
import { FooterStyled, HeaderStyled, MainStyled } from '../Home/styled';
import { Img404Styled } from './styled';
import Image404 from '../../assets/404.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const NotFound = () => {

    const history = useHistory()
    function toTheHome() {
        history.push("/")
    }

    return (
        <>
            <HeaderStyled>
                <span>Oops! Não Achamos esta página. Gostaria de ir à página principal?</span>
                <Stack spacing={3} direction="row">
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
