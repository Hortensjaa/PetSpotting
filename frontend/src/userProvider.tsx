import {createContext, useState} from 'react';
import {User, UserContextI} from "./types";


export const UserContext = createContext<UserContextI>({
    state: null,
    actions: {
        setUser: () => {},
        setName: () => {},
        setAvatar: () => {},
        setEmail: () => {},
    },
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

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
        actions: { setUser, setName, setAvatar, setEmail },
    };


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
