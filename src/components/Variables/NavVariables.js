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
        title: 'Coming Soon',
        path: 'coming-soon',
        enabled: true
    }
]

export const NavButtonItems = [
    {
        title: 'Sign In',
        path: '/login',
        enabled: false
    }
]

// {NavButtonItems.map((item, index) => {
//     return(
//         <NavBtn>
//             <NavBtnLink to={item.path}>{item.title}</NavBtnLink>
//         </NavBtn>
//     )
// })}