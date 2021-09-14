import styled from 'styled-components'

export const HeaderCompDesp = styled.header`
    min-height: 10vh;
    max-width: 100vw;
    background-color: #ff6459;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    text-align: center;
    padding: 10px;

    h4{
        margin-right: 20px;
    }
`

export const SelectSection = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
`

export const SectionTable = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    .resume_details{
        width: 100%;
        height: 100px;
        padding: 20px;
    }

    .table{
        min-height: 500px;
        width: 100%;
    }
`

export const SelectButtonResume = styled.button`   
    height: 50px;
    width: 150px;
    margin: 10px;
    border: none;
    border-bottom: ${props => props.resumeOrDetails ? '1px solid #3d0606' : 'none'};
    background-color: transparent;
    cursor: pointer;
    transition: all .1s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const SelectButtonDetails = styled.button`   
    height: 50px;
    width: 150px;
    margin: 10px;
    border: none;
    border-bottom: ${props => !props.resumeOrDetails ? '1px solid #3d0606' : 'none'};
    background-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;   
`

export const LogOffButtonStyled = styled.button`
    height: 30px;
    width: 150px;
`