import React from 'react';
import './index.css'
import Header from '../MainComponent/Header/index'
import Main from '../MainComponent/Main/index'
import Footer from '../MainComponent/Footer/index'

const App = () => {
    return (
        <>
            <Header text={'React Investments'}/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
