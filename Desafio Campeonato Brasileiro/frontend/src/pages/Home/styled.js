import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color:  #19B5FE;

    h1{
        color: #141414;
        letter-spacing: 5px;
        font-weight: 300;
        text-transform: uppercase;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    a{
        color: #141414;
        text-decoration: none;
    }

    a:hover{
        color: blue;
    }

    button{
        color: #141414;
        border-radius: 5px;
        margin: 10px;
    }
`

export const MainStyled = styled.header`
    max-width: 100vw;
    min-height: 85vh;
    background-color: #89c4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.94);

    li{
        list-style: none;
        display: inline;
        margin: 2px;
        color: #141414;
    }
`

export const FooterStyled = styled.header`
    max-width: 100vw;
    min-height: 5vh;
    background-color: transparent;
`
