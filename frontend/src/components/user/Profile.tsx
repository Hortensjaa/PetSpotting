import {useEffect, useState} from "react";
import {Box} from "@mui/material";


function Profile() {
    const [user, setUser] = useState(null);

    const getUser = async () => {

        const response = await fetch(
            '/api/user',
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        if(response.redirected) {
            document.location = response.url;
        }
        const data = await response.json();
        setUser(data)
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Box sx={{width: {xs: '100%'}}}>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                </div>
            ) : (
                <h1>Loading user data...</h1>
            )}
        </Box>
    );
}


export default Profile;
