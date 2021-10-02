import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/appContext';
import { StyledSectionInfo, StyledSectionOptions } from './styled';
import SelectYear from '../SelectYear/SelectYear'
import SelectRodada from '../SelectRodada/SelectRodada';
import InfoChampionshipComponent from '../InfoChampionshipComponent/InfoChampionshipComponent';

const OptionComponent = () => {   
    
    const context = useContext(GlobalStateContext);
    const {state: {anoDoCampeonato, rodada}} = context;

    return (
        <>
            <StyledSectionOptions>
                <SelectYear />
                <SelectRodada />
            </StyledSectionOptions>

            <StyledSectionInfo>
                <InfoChampionshipComponent anoDoCampeonato={anoDoCampeonato} rodada={rodada}/>
            </StyledSectionInfo>
        </>
    );
}

export default OptionComponent;
