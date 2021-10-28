import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';

const GoBack = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return (
       <IconBack src="../images/img-back.png" onClick={goBack} alt="back"/>
    )
}

const IconBack = styled.img`
    width: 40px;
    cursor: pointer;

`
export default GoBack
