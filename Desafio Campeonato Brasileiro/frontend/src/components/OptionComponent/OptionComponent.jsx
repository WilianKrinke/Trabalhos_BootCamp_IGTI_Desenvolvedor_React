import React, { useEffect, useState } from 'react';
import yearGenerator from '../../utils/yearGenerator';
import { StyledSectionInfo, StyledSectionOptions } from './styled';

const OptionComponent = () => {

    const [vetorYears, setvetorYears] = useState([]);
    const [selectedOption, setselectedOption] = useState(2003);

    useEffect(() => {
        const yearsValues = yearGenerator()
        setvetorYears(yearsValues)
        
    }, []);

    return (
        <>
            <StyledSectionOptions>            
                <p>Escolha um Ano:</p>
                <select name="year" onChange={(e) => setselectedOption(e.target.value)}>
                    {
                        vetorYears.length === 0 ?
                            <h1>Loading...</h1>
                        :
                            vetorYears.map(item => {
                                return (
                                    <option value={item} key={item}>{item}</option>
                                )
                            })
                    }
                </select>
            </StyledSectionOptions>

            <StyledSectionInfo>
                    <h3>Campeonato Brasileiro de {selectedOption}</h3>
                    <h3>Classificação</h3>
            </StyledSectionInfo>
        </>
    );
}

export default OptionComponent;
