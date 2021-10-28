import React from 'react'
import styled from 'styled-components'

const Button = ({ text, blk, onClick, src }) => {
    return (
        <ButtonUI blk={blk} onClick={onClick}>
            {text}
            <Icon  src={src} alt="img"/>
        </ButtonUI>
    )
}

const ButtonUI = styled.button`
    display: flex;
    gap:4px;
    align-items: center;
    padding:2px 5px;
    color:black;
    background-color:${({blk}) => (blk ? 'black' : 'yellow')} ;
    background-color: #f1dc1e;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

const Icon = styled.img`
    width: 11px;
`

export default Button
