/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import doAuth from '../../utils/doAuth';
import {HeaderComp, MainComp, FooterComp, ButtonComp} from './styled'

const Home = () => {
    const [auth, setAuth] = useState();    
    const history = useHistory();   

    const doUserAuth = async (e) => {  
        e.preventDefault();
        const email = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;

        const response = await doAuth(email, pass)

        if (response.status === 401) {
            setAuth(false)            
        } else {          
            localStorage.setItem('user', response.nome)
            localStorage.setItem('isauth', response.nome)
            history.push('/despesas')
        }
    }

    return (
        <>
            <HeaderComp>
                <h1>React Despesas</h1>
            </HeaderComp>
            <MainComp>
                <section>
                    <article>
                        <form onSubmit={e => doUserAuth(e)} method="post">
                            <div className="container-form">
                                <label htmlFor="user">User:</label>
                                <input type="email" name="user" id="user" />
                            </div>
                            
                            <div className="container-form">
                                <label htmlFor="pass">Pass:</label>
                                <input type="password" name="pass" id="pass" />
                            </div>
                            <ButtonComp type="submit">SignIn</ButtonComp>                   
                        </form>
                        {auth === false && 
                            <p>Usuário ou senha incorretos</p> 
                        }
                    </article>                            
                </section>
                
                <section>
                    <article>
                        <p>Usuario Teste: usuario@email.com</p>
                        <p>Senha Teste: 1234</p>
                    </article>
                </section>
            </MainComp>
            <FooterComp/>
        </>
    );
}

export default Home;
