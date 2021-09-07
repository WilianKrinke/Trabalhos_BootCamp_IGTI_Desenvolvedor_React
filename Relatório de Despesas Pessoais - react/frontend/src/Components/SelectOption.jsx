import React, { useEffect, useState } from 'react';
import './styles/selectoptions.css'

const SelectOption = ({getSelectParams}) => {

    const [valueOfMonth, setvalueOfMonth] = useState('01');
    const [valueOfYear, setvalueOfYear] = useState('2021');

    useEffect(() => {
        getSelectParams(valueOfYear,valueOfMonth)
    });

    return (
        <>
            <article className="article_info">
                <label htmlFor="ano">Ano</label>
                <select name="ano" id="ano" onChange={e => setvalueOfYear(e.target.value)}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>

                <label htmlFor="mes">Mês</label>
                <select name="mes" id="mes" onChange={e => setvalueOfMonth(e.target.value)}>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
            </article> 
        </>
    );
}

export default SelectOption;
