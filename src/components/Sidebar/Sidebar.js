import React from 'react';
import { NavMenuItems, NavButtonItems } from './../Variables/NavVariables';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

    const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {NavMenuItems.map((item, index) => {
                        return(
                            <SidebarLink to={item.path} onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{item.title}</SidebarLink>
                        )
                    })}
                </SidebarMenu>
                {NavButtonItems.map((item, index) => {
                    return(
                        <SideBtnWrap key={index} enabled={item.enabled}>
                            <SidebarRoute to={item.path} onClick={toggle}>{item.title}</SidebarRoute>
                        </SideBtnWrap>
                    )
                })}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
