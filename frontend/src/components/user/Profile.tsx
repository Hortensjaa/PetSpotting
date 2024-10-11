import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import axios from "axios";


function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/api/user', {withCredentials: true})
            .then((res) => {
                setUser(res.data)
            }).catch(er => {
            console.log("Error fetching user data: ", er)
        });
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
