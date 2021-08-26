import React from 'react';
import { ChooseCountryStyled } from './styled/styled';

const ChooseCountry = ({infos, onGetState}) => {

    function captureCountryValue(){
        const optionValue = document.querySelector('.select')
        const idOption = optionValue.selectedOptions[0]
        onGetState(idOption.value)   
    }  

    return (
        <ChooseCountryStyled>
            <label htmlFor="select" >Escolha o País: </label>
            <select name="select" onChange={captureCountryValue} className="select" >
                <option value="Escolha">Escolha um País</option>
                {infos.map(item => {
                    return(
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </ChooseCountryStyled>
    );
}

export default ChooseCountry;
