import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
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
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav navScroll={navScroll}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><NavImg src={Image} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='blog' smooth={true} duration={500} spy={true} exact='true' offset={-80}>BLOG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Register</NavLinks>
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
