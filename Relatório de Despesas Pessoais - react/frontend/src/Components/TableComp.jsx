/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getDespesas } from '../utils/getDespesas';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function TableComp({year, month}) {

  const [stateDatas, setstateDatas] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function teste() {
      const datas = await getDespesas(year, month);
      setstateDatas(datas)
    }
    teste()
    
  },[year, month]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Despesas</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Dia</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          stateDatas.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.descricao}
              </TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
              <TableCell align="right">{row.dia}</TableCell>
              <TableCell align="right">R$ {row.valor}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}