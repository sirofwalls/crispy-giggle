import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import { NavMenuItems, NavButtonItems } from './../Variables/NavVariables';
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
                        {NavMenuItems.map((item, index) => {
                            return(
                                <NavItem>
                                    <NavLinks to={item.path} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{item.title}</NavLinks>
                                </NavItem>
                            )
                        })}
                    </NavMenu>
                    {NavButtonItems.map((item, index) => {
                        return(
                            <NavBtn key={index} enabled={item.enabled}>
                                <NavBtnLink to={item.path}>{item.title}</NavBtnLink>
                            </NavBtn>
                        )
                    })}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
