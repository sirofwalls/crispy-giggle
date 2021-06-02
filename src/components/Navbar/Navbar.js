import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavImg
} from './NavbarElements';

import Image from '../../images/white_pw.png'

const Navbar = ({toggle}) => {
    const [navScroll, setNavScroll] = useState(false);

    const changeScroll = () => {
        if (window.scrollY >= 81) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScroll)
    }, [])

    return (
        <>
            <Nav navScroll={navScroll}>
                <NavbarContainer>
                    <NavLogo to='/'><NavImg src={Image} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='blog'>BLOG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Register</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
