import {useContext, useEffect, useState} from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AppBar from "../appBar/AppBar";
import {UserContext} from "../../UserProvider";
import {backendUrl} from "../../consts.ts";
import {Link, useParams} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {User} from "../../types";

function Profile() {
    const { id: user_id } = useParams();
    const [user, setUser] = useState<User>(null);
    const { state: thisUser, actions } = useContext(UserContext)

    const getUser = async () => {
        const response = await fetch(`/api/user/${user_id}`, {
            method: 'GET',
            credentials: 'include',
        });

        if (response.redirected) {
            document.location = response.url;
        }

        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        actions.loadUser();
        getUser()
    }, [user_id]);

    return (
        <Box sx={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
            <AppBar />
            <Box sx={{ height: { xs: 100, sm: 150, md: 150 }}} />
            {user ? (
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar alt={user.name} src={user.avatar_url} sx={{ width: 150, height: 150 }} />
                    <Typography variant="h3" sx={{ marginTop: 2 }}>{user.name}</Typography>
                    <Typography variant="h5" sx={{ marginTop: 1 }}>{user.user_id}</Typography>
                    <Typography variant="h6" sx={{ marginTop: 1 }}>email: {user.email ? user.email : "N/A"}</Typography>
                    <Typography variant="subtitle1">Provided by: {user.provider}</Typography>
                    {user.user_id === thisUser?.user_id && (
                        <Link
                            to={`${backendUrl}/logout`}
                            onClick={() => actions.setUser(null)}
                            style={{ color: 'inherit', textDecoration: 'inherit' }}
                        >
                            <LogoutIcon sx={{ fontSize: 30 }}/>
                        </Link>
                    )}
                </Box>
            ) : (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <Typography variant="h5">
                        Loading user data...
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default Profile;
