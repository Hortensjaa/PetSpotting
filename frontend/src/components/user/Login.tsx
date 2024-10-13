import {Box, Button, Typography} from "@mui/material";
import * as React from "react";

const Login = () => {

    const googleLogin = () => {
        window.location.href = "/oauth2/authorization/google"
    }

    const githubLogin = () => {
        window.location.href = "/oauth2/authorization/github"
    }

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h2" noWrap component="div" sx={{ display: { sm: 'block', xs: 'none' } }}>
                Pet Spotting
            </Typography>
            <Typography variant="h3" noWrap component="div" sx={{ display: { sm: 'none', xs: 'block' } }}>
                Pet Spotting
            </Typography>
            <Button onClick={googleLogin} sx={{ mt: 2 }}>Log in with Gmail</Button>
            <Button onClick={githubLogin} sx={{ mt: 2 }}>Log in with Github</Button>
        </Box>
    )
}
export default Login