import React, { useEffect, useState } from 'react';
import { getBackend } from '../api/datas';
import FilteredReports from './FilteredReports';
import './index.css'

const Home = () => {

    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setInfos(getBackend())
        setLoading(false)
    }, []);


    console.log(infos)
    return (
        loading ?
            <>
            <h1>Loading...</h1>
            </>
        :
            <>
                <header className="header">
                    <h1>React Investments</h1>
                </header>
                <main className="main">
                    {infos.map(item => {
                        return(
                            <section key={item.id} className="section">
                                <h2>{item.investment.description}</h2>
                                <FilteredReports className="article">
                                    {item}
                                </FilteredReports>
                            </section>
                        )
                    })}
                </main>
                <footer className="footer">

                </footer>
            </>
    );
}

export default Home;
