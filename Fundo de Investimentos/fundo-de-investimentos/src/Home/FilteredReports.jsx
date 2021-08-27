import React from 'react';
import './index.css'

const FilteredReports = ({children: datas}) => {
    const {reports} = datas

    return (
        <article className="article">
            <table border="1">
                <thead>
                    <tr>
                        <th className="allRows">Mês/Ano</th>
                        <th className="allRows">Valor no Mês</th>
                        <th className="allRows">Porcentagem</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(item => {
                        return(
                        <tr key={item.id}>
                            <td className="allRows">
                                {item.month}/{item.year}
                            </td>
                            <td className="allRows">
                                {item.value.toFixed(2)}
                            </td>
                            <td className="allRows">
                                {item.percentage} %
                            </td>
                        </tr> 
                        )
                    })}
                </tbody>
            </table>
            
        </article>
    );
}

export default FilteredReports;
