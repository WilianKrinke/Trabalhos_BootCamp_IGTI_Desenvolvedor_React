/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { somarDespesas } from '../utils/somarDespesas';

const TotalDespesas = ({year,month}) => {

    const [valoresTotais, setValoresTotais] = useState(0);

    useEffect(() => {
        async function getTotalDespesas() {
            const datas = await somarDespesas(year,month)
            const valores = datas.map(item => item.valor) 
            
            valores.length !== 0 ? setValoresTotais(valores.reduce((acc, curr) => acc + curr)) : setValoresTotais(0)
            
        }
        getTotalDespesas()
    }, [year,month]);


    return (
        <>
           <article>
                <p>Valor Total das Despesas no mês: R$ {valoresTotais.toLocaleString('PT')}</p>
            </article> 
        </>
    );
}

export default TotalDespesas;
