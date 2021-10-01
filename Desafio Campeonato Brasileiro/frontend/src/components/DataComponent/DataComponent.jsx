import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../context/appContext';
import { ArticleClassificacao, ArticleTableContainer, TableSection } from './styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getDatas from '../../utils/getDatas';
import './table.css'


const DataComponent = () => {

    const context = useContext(GlobalStateContext);
    const {state: {anoDoCampeonato, rodada}} = context;

    const [teamsTableChampionshipVetor, setTeamsTableChampionshipVetor] = useState([]);
    
    useEffect(() => {
        (async () => {
            const datasOrdered = await getDatas(anoDoCampeonato, rodada)
            console.log(datasOrdered)
            setTeamsTableChampionshipVetor(datasOrdered)
        })()
    }, [anoDoCampeonato, rodada]);

    return (
        <>
            <TableSection>
                <ArticleClassificacao>
                    <h3>Classificação</h3>
                </ArticleClassificacao>

                <ArticleTableContainer>
                    <TableContainer component={Paper} className="tablecontainer">
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" className="tablecellhead"><p>Posição</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>Time</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>P</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>V</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>E</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>D</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>GP</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>GC</p></TableCell>
                                    <TableCell align="center" className="tablecellhead"><p>S</p></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    teamsTableChampionshipVetor.length === 0 ?
                                            <TableRow>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                                <TableCell>Não há dados para exibir</TableCell>
                                            </TableRow>
                                        :
                                            teamsTableChampionshipVetor.map((item, index) => {
                                                return(
                                                    <TableRow key={item.id}>
                                                        <TableCell align="center" className="tablecellhead"><p>{index + 1}º</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.nome_time}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_pontos}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_vitorias}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_empates}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_derrotas}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_gols_pro}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_gols_contra}</p></TableCell>
                                                        <TableCell align="center" className="tablecellhead"><p>{item.total_de_gols}</p></TableCell>
                                                    </TableRow>
                                                )
                                            })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ArticleTableContainer>
            </TableSection>
        </>
    );
}

export default DataComponent;
