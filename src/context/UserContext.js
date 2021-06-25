import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState(undefined);
    const API_URL = (process.env.NODE_ENV === 'production' ? 'https://api.ptrwlsr.com' : 'http://localhost:5000');

    async function getUser() {
        const userRes = await axios.get(API_URL + '/api/auth/loggedIn');
        setUser(userRes.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return <UserContext.Provider value={{user, getUser}}>
                {props.children}
            </UserContext.Provider>;
}

export default UserContext;
export {UserContextProvider}
