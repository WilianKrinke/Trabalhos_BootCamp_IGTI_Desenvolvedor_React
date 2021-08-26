import styled from 'styled-components'

//Contries Info
export const SectionElectionsInfo = styled.section`
    padding: 10px;
    display: grid;
    grid-template-rows: 40px 1fr;
    gap: 5px;
`
//Choose country
export const ChooseCountryStyled = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #8c7353;
    border-radius: 5px;
    label{
        margin: 0px 10px;
        font-weight: 700;
    }
    
    #optionCountry{
        border-radius: 5px;
    }
    
`

//Country Info
export const CountryInfoStyled = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #8c7353;
    border-radius: 5px;
    padding: 10px;
    

    .infos{
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }

    p{
        font-weight: 500;
    }
`

//Cards
export const SectionElectionsCards = styled.section`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`

export const CardsStyled = styled.div`
    background-color: #8c7353;
    height: 300px;
    width: 250px;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        p{
            font-size: 12px;
        }

        img{
            border: 1px solid;
            border-radius: 100%;
            height: 70px;
            margin-right: 5px;
        }
        

        .container_info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            height: 40px;
            margin-left: 5px;
        }
    }

    .container_nameinfo{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        height: 60px;

        p{
            letter-spacing: 2px;
        }
    }
`

//Main Components
export const HeaderStyled = styled.header`
    height: 10vh;
    max-width: 100vw;
    background-color: #deb887;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        letter-spacing: 5px;
        text-transform: uppercase;
    }
`

export const MainStyled = styled.main`
    background-color: #b49770;
    min-height: 85vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: 220px auto;
`

export const FooterStyled = styled.footer`
    background-color: #b49770;
    min-height: 5vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`