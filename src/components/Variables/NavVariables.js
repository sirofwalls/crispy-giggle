export const NavMenuItems = [
    {
        title: 'About',
        path: 'about',
        enabled: true
    },
    {
        title: 'BLOG',
        path: 'blog',
        enabled: true
    },
    {
        title: 'Projects',
        path: 'projects',
        enabled: true
    },
    {
        title: 'Services',
        path: 'services',
        enabled: true
    }
]

export const NavButtonItems = [
    {
        title: 'Sign In',
        path: '/signin',
        enabled: true
    }
]

// {NavButtonItems.map((item, index) => {
//     return(
//         <NavBtn>
//             <NavBtnLink to={item.path}>{item.title}</NavBtnLink>
//         </NavBtn>
//     )
// })}