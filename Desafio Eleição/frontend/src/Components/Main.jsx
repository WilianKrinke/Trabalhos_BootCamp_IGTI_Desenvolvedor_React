import React, { useState } from 'react';
import ElectionInfo from './ElectionInfo';
import ElectionCards from './ElectionCards'
import { MainStyled} from './styled/styled';

const Main = () => {

    const [idElSelect, setidElSelect] = useState('');
    const [candidateNum, setcandidateNum] = useState(0);

    function getIdSelect(idSelect) {
        setidElSelect(idSelect)
    }

    function candidatesAmount(num) {
        setcandidateNum(num)
    }

    return (
        <MainStyled>
            <ElectionInfo getIdSelect={getIdSelect} numCandidates={candidateNum} />
            <ElectionCards idSelect={idElSelect} candidatesNum={candidatesAmount} />
        </MainStyled>
    );
}

export default Main;
