import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLinkHome,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

    const Sidebar = ({isOpen, toggle}) => {
        
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkHome to='/' onClick={toggle, toggleHome}>Home</SidebarLinkHome>
                    <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SidebarLink>
                    <SidebarLink to='blog' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>BLOG</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</SidebarLink>
                    <SidebarLink to='services' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Register</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
