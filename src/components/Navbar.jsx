import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <Header>

            <NavLink to='/'>
                <Logo src="images/starwars-logo.png" alt="logo" />
            </NavLink>

            <div className="flex gap-5">
                <motion.a
                    whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
                    href="https://github.com/Em-codes/starwars-react-movie-app"
                    target="_blank"
                >
                    <img
                        className="w-10"
                        src="data:image/png;base64,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"
                        alt='logo-github'
                    />
                </motion.a>
                <Button
                    whileHover={{ scale: 0.97 }} transiton={{ type: 'spring', stifness: 300 }}
                >
                    Sign In
                </Button>
            </div>

        </Header>
    )
}

const Header = styled.section`
    background-color: black;
    height: 80px;
    padding:1rem 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    height: 50px;
    cursor: pointer;
`
const Button = styled(motion.button)`
    padding:5px 20px;
    color:black;
    background-color: #f1dc1e;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
`

export default Navbar
