import styled from 'styled-components'

export const TableSty = styled.table`
    width: 100%;
    
    thead{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        tr{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            margin: 5px;
            width:100% ;
        };
    }

    tbody{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        tr{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            margin: 5px;            
            width:100%;
        };  
    }

`