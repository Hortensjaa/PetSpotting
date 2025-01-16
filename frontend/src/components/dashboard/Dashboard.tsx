import {useContext, useEffect, useState} from 'react'
import Grid from '@mui/material/Grid2';

import PetCard from "./PetCard.tsx";
import AppBar from "../appBar/AppBar.tsx";
import {Box} from "@mui/material";
import AddPetForm from "./AddPetForm.tsx";
import Typography from "@mui/material/Typography";
import {UserContext} from "../../userProvider.tsx";
import {PetResponse} from "../../types";


function Dashboard() {
    const { state: user, actions } = useContext(UserContext);
    const [petsList, setPets] = useState<PetResponse[]>([]);
    const gridItemStyles = {
        marginX: {xs: 0, sm: 2, md: 5},
        marginY: {xs: 0, sm: 0, md: 0},
        width: {xs: '100%', sm: '50%', md: '25%'},
    };

    const getPets = async () => {

        const response = await fetch(
            '/api/pets',
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        if(response.redirected) {
            document.location = response.url;
        }
        const data = await response.json();
        setPets(data)
    }

    useEffect(() => {
        actions.loadUser();
        getPets();
    }, []);

    return (
        <Box sx={{width: {xs: '100%'}}}>
            <AppBar/>
            <Box sx={{height: {xs: 60, md: 80}}}/>
            {user ? (
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    <Grid item="true" key={-1} xs={12} sm={6} md={4} sx={gridItemStyles}>
                        <AddPetForm/>
                    </Grid>
                    {petsList.map((p, i) => (
                        <Grid item="true" key={i} xs={12} sm={6} md={4} sx={gridItemStyles}>
                            <PetCard key={i}
                                     id={p.id}
                                     name={p.name}
                                     species={p.species}
                                     description={p.description}
                                     image_url={p.image_url}
                                     time_spotted={p.time_spotted}
                                     user_id={p.user_id}
                                     user_name={p.user_name}
                                     user_avatar={p.user_avatar}
                                     likes_num={p.likes_num}
                                     liked={p.liked}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <Typography variant="h5">
                        Log in please :3
                    </Typography>
                </Box>
            )}
        </Box>
    );
}


export default Dashboard;