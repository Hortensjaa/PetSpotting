import {useContext, useEffect} from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AppBar from "../appBar/AppBar";
import {UserContext} from "../../UserProvider";
import {backendUrl} from "../../consts.ts";
import {Link} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
    const { state: user, actions } = useContext(UserContext);

    useEffect(() => {
        actions.loadUser();
    }, []);

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
                    <Link
                        to={`${backendUrl}/logout`}
                        onClick={() => actions.setUser(null)}
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                        <LogoutIcon sx={{ fontSize: 30 }}/>
                    </Link>
                </Box>
            ) : (
                <h1>Loading user data...</h1>
            )}
        </Box>
    );
}

export default Profile;
