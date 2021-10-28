import React from 'react'
import styled from 'styled-components'

const TableFooter = ({ renderCharacters, totalHeight}) => {
    return (
        <TableFooterUI>
        <div className="sm:flex hidden  justify-between">
            <div>{`Number Of Characters:  ${renderCharacters.length}`}</div>
            <div>TOTAL HEIGHT: <span className="font-bold">{totalHeight()}{'cm'}</span></div>
        </div>
        <div className="sm:hidden flex justify-between">
            <div>{`NOCs:  ${renderCharacters.length}`}</div>
            <div>Height: <span className="font-bold">{totalHeight()}{'cm'}</span></div>
        </div>
    </TableFooterUI>
    )
}

const TableFooterUI = styled.div`
    padding:5px 10px;
    background-color: #353333;
    color: #dab71e;
    
`

export default TableFooter
