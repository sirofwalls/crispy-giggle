import React from 'react';
import { NavMenuItems } from './../Variables/NavVariables';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { useContext } from 'react';
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

        const {user, getUser} = useContext(UserContext);
        const API_URL = (process.env.NODE_ENV === 'production' ? 'https://api.ptrwlsr.com' : 'http://localhost:5000');

        const logout = async () => {
            await axios.get(API_URL + '/api/auth/logout');
            await getUser();
        }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {NavMenuItems.map((item, index) => {
                        return(
                            <SidebarLink key={index}to={item.path} onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{item.title}</SidebarLink>
                        )
                    })}
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to={item.path} onClick={toggle}>{item.title}</SidebarRoute>
                </SideBtnWrap> */}
                {user === null ?
                    (<SideBtnWrap>
                        <SidebarRoute to={'/login'}>Log In</SidebarRoute>
                    </SideBtnWrap>)
                    :
                    (user && <SideBtnWrap>
                        <SidebarRoute onClick={logout}>Log Out</SidebarRoute>
                    </SideBtnWrap>)
                }
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
