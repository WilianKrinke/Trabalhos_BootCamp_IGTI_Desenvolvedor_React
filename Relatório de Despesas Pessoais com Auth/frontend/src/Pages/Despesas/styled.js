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
    border: 1px solid;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
`

export const SectionTable = styled.section`
    border: 1px solid;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    .resume_details{
        border: 1px solid;
        width: 100%;
        height: 100px;
        padding: 20px;
    }

    .table{
        border: 1px solid;
        width: 100%;
    }
`

export const SelectButtonResume = styled.button`   
    height: 50px;
    width: 150px;
    margin: 10px;
    border: none;
    border-bottom: ${props => props.resumeOrDetail ? '1px solid #3d0606' : 'none'};
    background-color: transparent;
    cursor: pointer;
    transition: all .1s ease-in-out;
    
    :hover{
        background-color: rgba(82, 82, 82, 0.11);
    }

    p{
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`

export const SelectButtonDetails = styled.button`   
    height: 50px;
    width: 150px;
    margin: 10px;
    border: none;
    border-bottom: ${props => !props.resumeOrDetail ? '1px solid #3d0606' : 'none'};
    background-color: transparent;
    cursor: pointer;
    transition: all .1s ease-in-out;
    
    :hover{
        background-color: rgba(82, 82, 82, 0.11);
    }

    p{
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`