import {Button, Typography} from "@mui/material";
import * as React from "react";

const Login = () => {

    const googleLogin = () => {
        window.location.href = "/oauth2/authorization/google"
    }

    const githubLogin = () => {
        window.location.href = "/oauth2/authorization/github"
    }

    return (
        <div>
            <Typography variant="h2" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }} >
                Pet Spotting
            </Typography>
            <Button onClick={googleLogin}>Log in with Gmail</Button>
            <Button onClick={githubLogin}>Log in with Github</Button>
        </div>
    )
}
export default Login