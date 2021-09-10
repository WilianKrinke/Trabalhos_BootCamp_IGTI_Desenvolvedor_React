import React, { useEffect, useState } from 'react';
import { FooterComp, MainComp } from '../Home/styled';
import LogOffButton from '../../Components/LogOffButton'
import { HeaderCompDesp, SectionTable, SelectButtonDetails, SelectButtonResume, SelectSection } from './styled';
import SelectOption from '../../Components/SelectOption';

const Despesas = () => {

    const [resumeOrDetail, setResumeOrDetail] = useState(true);

    

    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2021');

    const [infoDatas, setinfoDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/despesas').then(res => console.log(res.json()))
    }, []);





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
           <HeaderCompDesp>
                <h4>Olá {localStorage.getItem('user')}</h4>
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
    );
}



export default Despesas;
