import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import SelectOption from '../../Components/SelectOption';
import TableComp from '../../Components/TableComp';
import getDespesasByMonthYear from '../../utils/despesasByMonthYear';
import getDespesasDatails from '../../utils/despesasDetails';
import isAuth from '../../utils/isAuth';
import logOff from '../../utils/logOff';
import { FooterComp, MainComp } from '../Home/styled';
import { HeaderCompDesp, LogOffButtonStyled, SectionTable, SelectButtonDetails, SelectButtonResume, SelectSection } from './styled';

const Despesas = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(true);

    const [resumeOrDetails, setResumeOrDetails] = useState('Resume');
    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2021');
    const [boolToResumeOrDetails, setBoolToResumeOrDetails] = useState(true);

    const [resumedDatas, setResumedDatas] = useState([]);
    const [detailsDatas, setDetailsDatas] = useState([]);
    const [consumed, setConsumed] = useState(true);

    useEffect(() => {
        isAuth().then(resp => {
            if (resp.status === 401) {
                history.push('/')
            } else {
                getDespesasByMonthYear(year,month,resumeOrDetails).then(resp => {
                    setResumedDatas(resp)
                    setConsumed(false)
                })
                getDespesasDatails(year,month,resumeOrDetails).then(resp => {
                    setDetailsDatas(resp)
                    setConsumed(false)
                })
                setLoading(false)
            }
        })

       
        
        

        


    }, [history,year,month,resumeOrDetails]);

    const selectDetailOrResume = (e) => {
        e.preventDefault()
        const btnTextSelected = e.target.textContent
        console.log(btnTextSelected)
        setResumeOrDetails(btnTextSelected)
        btnTextSelected === "Resume" && setBoolToResumeOrDetails(true)
        btnTextSelected === "Details" && setBoolToResumeOrDetails(false)
    }

    function getSelectParams(ano, mes) {
        setYear(ano)
        setMonth(mes)
    }


    return (
        <>
            {loading ?
                <h1>Loading...</h1>
            : 
                <>
                    <HeaderCompDesp>
                        <LogOffButtonStyled onClick={e => logOff(e,history)}>
                            LogOff
                        </LogOffButtonStyled>
                    </HeaderCompDesp>
                    <MainComp>
                        <SelectSection>
                            <article>
                                <SelectOption getSelectParams={getSelectParams}/>
                            </article>
                            <article>
                                {
                                    !resumedDatas.length || !detailsDatas.length ?
                                        <h1>Não há dados para exibir</h1>
                                    :
                                        <div>
                                             {consumed ? 
                                                 <p>Total de Despesas das categorias R$ 0</p>
                                             :
                                                 <p>Total de Despesas das categorias R$ {resumedDatas
                                                     .map(item => parseFloat(item.valor))
                                                     .reduce((acc,curr) => acc + curr).toLocaleString('PT')}</p>
                                            }
                                        </div>
                                }

                            </article>
                        </SelectSection>

                        <SectionTable>
                                <article className="resume_details">
                                    <SelectButtonResume onClick={e => selectDetailOrResume(e)} resumeOrDetails={boolToResumeOrDetails}>
                                       Resume
                                    </SelectButtonResume >
                                    <SelectButtonDetails onClick={e => selectDetailOrResume(e)} resumeOrDetails={boolToResumeOrDetails}>
                                        Details
                                    </SelectButtonDetails >
                                </article>

                                {
                                    !resumedDatas.length || !detailsDatas.length ? 
                                        <h1>Não há dados para exibir</h1>
                                    :
                                    <article className="table">
                                        {
                                            resumeOrDetails === "Resume" ?
                                                <TableComp datas={resumedDatas} resumeOrDetails={resumeOrDetails} />
                                            :                                        
                                                <TableComp datas={detailsDatas} resumeOrDetails={resumeOrDetails} />
                                        }
                                    </article>
                                }

                        </SectionTable>
                    </MainComp>
                    <FooterComp />
                </>
            }
        </>
    );
}



export default Despesas;
