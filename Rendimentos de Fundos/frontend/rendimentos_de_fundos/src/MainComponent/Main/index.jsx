/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ArticleContent from '../../components/ArcticleContent';
import TitleComponent from '../../components/TitleComponent';
import  './index.css'

const Main = () => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);
    useEffect(() => {
         fetch('http://localhost:8080/')
            .then(res => res.json())
            .then(json => {                
                setDatas(json.investments)
                setDatas2(json.reports)
            })
            .catch(error => console.log(error)) 
    }, []);

    const id = datas.map(item => item.id)
    const description = datas.map(item => item.description)
    
    return (       
        <>
            <main className="main">
                <section className="section">
                <TitleComponent title={description[0]}/>
                <ArticleContent idinvestment={id[0]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[1]}/>
                <ArticleContent idinvestment={id[1]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[2]}/>
                <ArticleContent idinvestment={id[2]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[3]}/>
                <ArticleContent idinvestment={id[3]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[4]}/>
                <ArticleContent idinvestment={id[4]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[5]}/>
                <ArticleContent idinvestment={id[5]}/>
                </section>

                <section className="section">
                <TitleComponent title={description[6]}/>
                <ArticleContent idinvestment={id[6]}/>
                </section>
            </main> 
        </>
    );
}

export default Main;
