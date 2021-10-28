import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Button from './Button';
import { tableHeaders } from './data';
import { motion } from 'framer-motion'
import GoBack from './GoBack';
import Legend from './Legend';

const MovieDetails = () => {
    const { state } = useLocation();
    const { characters, movie_name } = state.Movies
    const [filterTerm, setFilterTerm] = useState('')
    const [movieCharacters, setmovieCharacters] = useState(characters)
    const [toggleSort, setToggleSort] = useState(false)

    const totalHeight = () => {
        return characters.reduce((a, b) => a + b.height, 0)
    }

    function ascSort() {
        let x = []
        x.push(...characters.sort((a, b) => (
            a.name.localeCompare(b.name)
        ))
        )
        setmovieCharacters(x)
    }

    function dscSort() {
        let x = []
        x.push(...characters.sort((a, b) => (
            b.name.localeCompare(a.name)
        ))
        )
        setmovieCharacters(x)
    }

    const onSortChange = () => {
        if (toggleSort) dscSort()
        else ascSort()
        setToggleSort(!toggleSort)
    }


    const renderCharacters = movieCharacters.filter(val => {
        if ({ filterTerm } === '') {
            return val
        } else if (val.gender.charAt(0).toLowerCase().includes(filterTerm.toLowerCase())
        ) {
            return val
        }
    }).map((value, i) => (
        <SingleItemInfo key={i}>
            <p>{value.name}</p>
            <p className="uppercase">{value.gender.charAt(0)}</p>
            <p>{value.height}{'cm'}</p>
        </SingleItemInfo>

    ))

    return (
        <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-11/12 mx-auto mt-10 ">
            <MovieName>{movie_name}</MovieName>
            <GoBack />
            <MovieDetailsContainer
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, delay: 0.3 }}
            >
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
                <TableHeaders>
                    <h1>{tableHeaders.name}</h1>
                    <h1>{tableHeaders.gender}</h1>
                    <h1>{tableHeaders.height}</h1>
                </TableHeaders>

                {renderCharacters}

                <TableFooter>
                    <div className="sm:flex hidden  justify-between">
                        <div>{`Number Of Characters:  ${renderCharacters.length}`}</div>
                        <div>TOTAL HEIGHT: <span className="font-bold">{totalHeight()}{'cm'}</span></div>
                    </div>
                    <div className="sm:hidden flex justify-between">
                        <div>{`NOCs:  ${renderCharacters.length}`}</div>
                        <div>Height: <span className="font-bold">{totalHeight()}{'cm'}</span></div>
                    </div>
                </TableFooter>

            </MovieDetailsContainer>
        </div>


    )
}


const MovieDetailsContainer = styled(motion.section)`
    background:white;
    margin: auto;
    margin-top: 4rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
`

const TableHeaders = styled.div`
    display: grid;
    grid-template-columns: 250px auto auto;
    padding:5px 10px;
    background-color: black;
    color: #dab71e;

    @media (max-width:540px) {
        grid-template-columns: 150px auto auto;
  }
`

const SingleItemInfo = styled.div`
    display: grid;
    grid-template-columns: 250px auto auto;
    padding:5px 10px;

    @media (max-width:540px) {
        grid-template-columns: 150px auto auto;
  }
`
const TableFooter = styled.div`
    padding:5px 10px;
    background-color: #353333;
    color: #dab71e;
    
`
const MovieName = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;

`
export default MovieDetails
