import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '/images/logo.png'
import Navbar from './Navbar'


const Header = () => {
    return (
        <><MainHeader>
            <NavLink to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
            <Navbar />
        </MainHeader><hr /></>
    )
}

const MainHeader = styled.header`

    padding: 2em 1em;
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: space-between;

        img{
            width: 16em;
            object-fit: scale-down;
        }
    


`



export default Header