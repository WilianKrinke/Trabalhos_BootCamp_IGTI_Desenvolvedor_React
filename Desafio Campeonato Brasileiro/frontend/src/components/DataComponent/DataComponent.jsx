/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../context/appContext';
import getDatas from '../../utils/getDatas';
import { TableSection } from './styled';

const DataComponent = () => {

    const context = useContext(GlobalStateContext);
    const {state: {anoDoCampeonato, rodada}} = context;
    
    useEffect(() => {
       getDatas(anoDoCampeonato, rodada)
    }, [anoDoCampeonato,rodada]);

    return (
        <>
            <TableSection>
                <h3>Classificação</h3>
                <article>
                    <h3>{anoDoCampeonato}</h3>
                </article>
            </TableSection>
        </>
    );
}

export default DataComponent;
