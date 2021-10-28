import React from 'react'
import Button from './Button'
import Legend from './Legend'

const TableTopComponents = ({ onSortChange, setFilterTerm}) => {
    return (
        <div>
            <div className="flex justify-between items-center px-2">
                    <Button onClick={onSortChange}
                        text={'Sort'}
                        src={"../images/sort.png"}
                    />
                    <Legend />
                    <input
                        type='search'
                        placeholder="filter by gender"
                        className="border p-1 outline-none"
                        onChange={event => { setFilterTerm(event.target.value) }}
                    />
                </div>
        </div>
    )
}

export default TableTopComponents
