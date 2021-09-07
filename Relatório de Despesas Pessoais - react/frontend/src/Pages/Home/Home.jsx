/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { getDespesas } from '../../utils/getDespesas';
import SelectOption from '../../Components/SelectOption';
import TableComp from '../../Components/TableComp';
import './home.css'
import TotalDespesas from '../../Components/TotalDespesas';

const Home = () => {

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    function getSelectParams(ano, mes) {
        setYear(() => ano)
        setMonth(() => mes)
    }

    return (
        <>
            <header>
                <h1>Despesas Pessoais React</h1>
            </header>
            <main>
                <section className="infoSection">
                    <SelectOption getSelectParams={getSelectParams}/>
                    <TotalDespesas year={year} month={month}/>


                </section>
                <section className="table_section">
                    <TableComp year={year} month={month}/>
                </section>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default Home;
