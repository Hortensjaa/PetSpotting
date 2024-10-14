import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import User from "../../types/User.ts";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AppBar from "../appBar/AppBar.tsx";


function Profile() {
    const [user, setUser] = useState<User>(null);

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
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AppBar/>
            <Box sx={{height: {xs: 100, sm: 150, md: 150}}}/>
            {user ? (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    {user.avatar_url ? (
                        <Avatar alt="User Avatar" src={user.avatar_url} sx={{ width: 150, height: 150 }} />
                    ) : (
                        <Avatar alt="No Avatar"
                                sx={{ bgcolor: (theme) => theme.palette.secondary.main, width: 150, height: 150 }}>
                            {user.name[0]}
                        </Avatar>
                    )}
                    <Typography variant="h3" sx={{ marginTop: 2 }}>{user.name}</Typography>
                    <Typography variant="h4" sx={{ marginTop: 1 }}>{user.user_id}</Typography>
                    <Typography variant="h6" sx={{ marginTop: 1 }}>
                        email: {user.email ? user.email : "N/A"}
                    </Typography>
                    <Typography variant="subtitle1">Provided by: {user.provider}</Typography>


                </Box>
            ) : (
                <h1>Loading user data...</h1>
            )}
        </Box>
    );
}


export default Profile;
