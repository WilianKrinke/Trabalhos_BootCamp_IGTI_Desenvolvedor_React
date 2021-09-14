import React from 'react';
import { TableSty } from './styled';

const TableComp = ({datas, resumeOrDetails}) => {

  return (
    <>
      <TableSty>
        <thead>
          {
            resumeOrDetails === "Resume" && 
            <tr>            
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Valor(R$) </th>
            </tr>
          }

          {
             resumeOrDetails === "Details" &&
             <tr>            
              <th>Categoria</th>
              <th>Valor(R$) </th>
            </tr>
          }

        </thead>
        <tbody>
          {
            resumeOrDetails === "Resume" && 
              datas.map(item => {
              return(
                <tr key={item.id}>
                  <td>{item.descricao}</td>
                  <td>{item.categoria}</td>
                  <td>R$ {item.valor}</td>
                </tr>
              )
            })
          }

          {
            resumeOrDetails === "Details" &&
            datas.map(item => {
              return(
                <tr key={item.id}>
                  <td>{item.categoria}</td>
                  <td>R$ {item.valorTotal}</td>
                </tr>
              )
            })
          }
        </tbody>
      </TableSty>
    </>
  );
}

export default TableComp;
