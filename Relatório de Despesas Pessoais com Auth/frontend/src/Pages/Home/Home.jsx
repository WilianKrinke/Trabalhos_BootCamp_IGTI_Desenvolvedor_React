import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import doAuth from '../../utils/doAuth';
import isAuth from '../../utils/isAuth';
import {HeaderComp, MainComp, FooterComp, ButtonComp} from './styled'

const Home = () => {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [erro, setErro] = useState(false);

    useEffect(() => {
        isAuth().then(resp => {
            if (resp.status === 401) {
                console.log('Não Logado')
                
            } else {
                console.log('Logado')
                history.push('/despesas')
            }
        })  
        
    }, [history]);

    const signIn = (e) => {
        e.preventDefault()
        doAuth(email, pass).then(res => {
            console.log(res)
            history.push('/despesas')
        },(err) => {
            console.error(err)
            setErro(true)
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
                        {erro && <p>Usuario ou Senha incorretos</p>}                        
                </section>
            </MainComp>
            <FooterComp/>
        </>
    );
}

export default Home;
