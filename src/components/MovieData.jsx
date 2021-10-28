import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { movies, } from './data'
import { AnimatePresence, motion } from 'framer-motion'

const MovieData = () => {

    const renderMovies = movies.sort((a, b) => (
        b.year.localeCompare(a.year)
    )).map((movie, i) => (
        <NavLink
            to={{
                pathname: `/moviesdetails/`,
                state: { Movies: movie }
            }}
            key={i}
        >
            <LinkWrapper
                whileHover={{ scale: 0.97 }} transiton={{ type: 'spring', stifness: 300 }}
            >
                <h1>{movie.movie_name}</h1>
                <h1>{`Release Year: ${movie.year}`}</h1>
            </LinkWrapper>
        </NavLink>
    ))

    return (
        <div className="cover-photo">
            <MovieDataContainer>
                <motion.details
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
                    className="xl:w-4/12 lg:w-6/12 w-10/12 mx-auto pt-20 cursor-pointer">
                    <Summary className="text-white text-3xl font-bold">StarWars Movie List</Summary>
                    {renderMovies}
                </motion.details>
            </MovieDataContainer>
        </div>
    )
}

const MovieDataContainer = styled.section`
    background-image: url('images/cover14.jpg');
    width: 100vw;
    height: calc(100vh - 80px);
`

const LinkWrapper = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    border-radius: 3px;
    padding: 6px 4px;
    font-size: 1.1rem;
    background: white;
`

const Summary = styled.summary`
    padding: 2px 6px;
    width:100%;
    background-color: #dfd9d963;
    border: none;
    box-shadow: 3px 3px 4px black;
    border-radius: 4px;
    cursor: pointer;
`
export default MovieData
