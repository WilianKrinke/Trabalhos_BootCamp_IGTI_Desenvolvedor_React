import React from 'react';
import './index.css'

const TitleComponent = ({title}) => {
    return (
        <>
            <article className="article">
                <h2>{title}</h2>                
            </article>
        </>
    );
}

export default TitleComponent;
