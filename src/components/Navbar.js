import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <Navwrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand' />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>Products</Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer><i className="fas fa-cart-plus">  My Cart</i></ButtonContainer>
                </Link>
            </Navwrapper>
        )
    }
}

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.3rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${prop=>prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
padding:0.3rem 1rem;
border-radius:0.5rem;
color:${prop=>prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
margin:0.5rem;

&:hover{
    background:${prop=>prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
    color:var(--mainBlue);
}

`
const Navwrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
color:var(--mainWhite) !important;
font-size:1.3rem;
}

`
