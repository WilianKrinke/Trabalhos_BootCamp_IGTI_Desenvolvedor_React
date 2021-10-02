import React from 'react';
import TableComponent from '../TableComponent/TableComponent';
import { ArticleClassificacao, ArticleTableContainer, TableSection } from './styled';

const DataComponent = () => {
    
    return (
        <>
            <TableSection>
                <ArticleClassificacao>
                    <h3>Classificação</h3>
                </ArticleClassificacao>

                <ArticleTableContainer>
                    <TableComponent />
                </ArticleTableContainer>
            </TableSection>
        </>
    );
}

export default DataComponent;
