import {createContext, useEffect, useState} from 'react';
import {User, UserContextI} from "./types";


export const UserContext = createContext<UserContextI>({
    state: null,
    actions: {
        setUser: () => {},
        loadUser: () => {},
        setName: () => {},
        setAvatar: () => {},
        setEmail: () => {},
    },
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const loadUser = async () => {
        const response = await fetch('/api/user', {
            method: 'GET',
            credentials: 'include',
        });

        if (response.redirected) {
            document.location = response.url;
        }

        const data = await response.json();
        setUser(data);
    };

    function setName(newName: String) {
        if (user) {
            setUser({name: newName, ...user});
        }
    }

    function setAvatar(newUrl: String) {
        if (user) {
            setUser({avatar_url: newUrl, ...user});
        }
    }

    function setEmail(newMail: String) {
        if (user) {
            setUser({email: newMail, ...user});
        }
    }

    const value = {
        state: user,
        actions: { setUser, loadUser, setName, setAvatar, setEmail },
    };


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


