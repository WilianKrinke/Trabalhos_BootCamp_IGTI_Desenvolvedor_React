import styled from 'styled-components'

export const HeaderComp = styled.header`
    min-height: 10vh;
    max-width: 100vw;
    background-color: #ff6459;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const MainComp = styled.main`
    min-height: 85vh;
    max-width: 100vw;
    background-color: #ffbcb8;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    border: 1px solid;

    form{
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        flex-direction: column;
        height: 180px;

        .container-form{
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-align: center;
            flex-direction: column;
            height: 70px;

            #user, #pass{
                border-radius: 5px;
            }
        }
    }
`

export const FooterComp = styled.footer`
    min-height: 5vh;
    max-width: 100vw;
    background-color: #ffbcb8;
`

export const ButtonComp = styled.button`
    height: 30px;
    width: 100px;
`