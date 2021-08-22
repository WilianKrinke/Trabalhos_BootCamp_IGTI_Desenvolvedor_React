/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './index.css'



const ArticleContent = ({idinvestment}) => {

    const [reports, setReports] = useState([]);

    const [novoArray, setNovoArray] = useState([]);

    useEffect(() => {
         fetch('http://localhost:8080/')
            .then(res => res.json())
            .then(json => {
                setReports(json.reports)
                
            })
            .catch(error => console.log(error)) 
    }, []);

    return (
        <>
            <article className="article_content">
               {reports.map(item => {
                   return (
                    <>
                    {item.investmentId === idinvestment ? 
                        (
                        <div key={item.id} className="div_content">
                            <p>{item.month}/{item.year}</p>
                            <p>{parseInt(item.value).toFixed(2)}</p>                            
                        </div>
                            
                        )
                        :
                        ''  
                    }
                    </>
                   )
               })}
               
            </article>
        </>
    );
}

export default ArticleContent;
