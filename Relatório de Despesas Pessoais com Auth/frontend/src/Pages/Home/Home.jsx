/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import doAuth from '../../utils/doAuth';
import {HeaderComp, MainComp, FooterComp, ButtonComp} from './styled'

const Home = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [erro, setErro] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        doAuth(email, pass).then(res => {
            console.log(res)
        },(err) => {
            console.error(err)
        })
    }


    return (
        <>
            <HeaderComp>
                <h1>React Despesas</h1>
            </HeaderComp>
            <MainComp>
                <section>
                    <article>
                        <form method="post" onSubmit={e => signIn(e)}>
                            <div className="container-form">
                                <label htmlFor="user">User:</label>
                                <input type="email" name="user" id="user" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            
                            <div className="container-form">
                                <label htmlFor="pass">Pass:</label>
                                <input type="password" name="pass" id="pass" value={pass} onChange={e => setPass(e.target.value)}/>
                            </div>
                            <ButtonComp type="submit">SignIn</ButtonComp>                   
                        </form>
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
