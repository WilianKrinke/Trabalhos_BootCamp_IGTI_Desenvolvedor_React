import React from 'react';
import './index.css'

const Header = ({text}) => {
    return (
        <>
            <header className="header">
                <p>{text}</p>
            </header>
        </>
    );
}

export default Header;
