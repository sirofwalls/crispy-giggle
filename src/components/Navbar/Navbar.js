import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import { NavMenuItems } from './../Variables/NavVariables';
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

import Image from '../../images/white_pw.png';
import { getSuggestedQuery } from '@testing-library/dom';

const Navbar = ({toggle}) => {
    const [navScroll, setNavScroll] = useState(false);

    const changeScroll = () => {
        if (window.scrollY >= 81) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
    }

    const {user, getUser} = useContext(UserContext);

    useEffect(() => {
        window.addEventListener('scroll', changeScroll)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const logout = async () => {
        await axios.get('http://localhost:5000/api/auth/logout');
        await getUser();
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
                                <NavItem key={index}>
                                    <NavLinks to={item.path} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{item.title}</NavLinks>
                                </NavItem>
                            )
                        })}
                    </NavMenu>
                    {user === null ?
                        (<NavBtn>
                            <NavBtnLink to={'/login'}>Log In</NavBtnLink>
                        </NavBtn>)
                        :
                        (user && <NavBtn>
                            <NavBtnLink to={'/'} onClick={logout}>Log Out</NavBtnLink>
                        </NavBtn>)
                    }
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
