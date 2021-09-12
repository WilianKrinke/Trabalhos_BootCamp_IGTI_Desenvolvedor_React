/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FooterComp, MainComp } from '../Home/styled';
import LogOffButton from '../../Components/LogOffButton'
import { HeaderCompDesp, SectionTable, SelectButtonDetails, SelectButtonResume, SelectSection } from './styled';
import SelectOption from '../../Components/SelectOption';
import isAuth from '../../utils/isAuth';
import { useHistory } from 'react-router';

const Despesas = () => {
    const history = useHistory()

    const [resumeOrDetail, setResumeOrDetail] = useState(true);
    const [loading, setLoading] = useState(true);

    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2021');
    const [infoDatas, setinfoDatas] = useState([]);

    useEffect(() => {
        isAuth().then(resp => {
            if (resp.status === 401) {
                console.log('Não Logado')
                history.push('/')
            } else {
                console.log('Logado')
                setLoading(false)
            }
        })     
        
    }, [history]);

    function getSelectParams(ano, mes) {
        console.log(ano)
        console.log(mes)
    }

    const infoResume = (e) => {
        e.preventDefault()
        setResumeOrDetail(true)
    }

    const infoDetail = (e) => {
        e.preventDefault()
        setResumeOrDetail(false)
    }


    return (
        <>
        {loading ?
            <h1>Loading...</h1>
        : 
            <>
                <HeaderCompDesp>
                    <LogOffButton />
                </HeaderCompDesp>
                <MainComp>
                    <SelectSection>
                        <article>
                            <SelectOption getSelectParams={getSelectParams}/>
                        </article>
                        <article>
                            <p>Total de Despesas das categorias</p>
                        </article>
                    </SelectSection>

                    <SectionTable>
                            <article className="resume_details">
                                <SelectButtonResume onClick={e => infoResume(e)} resumeOrDetail={resumeOrDetail}>
                                    <p>Resumo</p>
                                </SelectButtonResume >
                                <SelectButtonDetails onClick={e => infoDetail(e)} resumeOrDetail={resumeOrDetail}>
                                    <p>Detalhe</p>
                                </SelectButtonDetails >
                            </article>
                            <article className="table">
                                {/* tabela de categoria e valor */}
                            </article>
                    </SectionTable>
                </MainComp>
                <FooterComp />
            </>
        }
        </>
    );
}



export default Despesas;
