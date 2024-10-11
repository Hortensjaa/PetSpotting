import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid2';
import axios from 'axios';

import Pet from "../../types/Pet.ts";
import PetCard from "./PetCard.tsx";
import AppBar from "../appBar/AppBar.tsx";
import {Box} from "@mui/material";
import AddPetForm from "./AddPetForm.tsx";
import Typography from "@mui/material/Typography";


function Dashboard() {
    const [petsList, setPets] = useState<Pet[]>([]);
    const gridItemStyles = {
        marginX: {xs: 0, sm: 2, md: 5},
        marginY: {xs: 0, sm: 0, md: 0},
        width: {xs: '100%', sm: '50%', md: '25%'},
    };

    useEffect(() => {
        axios.get('/api/pets').then((res) => {
            setPets(res.data)
        })
    }, []);

    return (
        <Box sx={{width: {xs: '100%'}}}>
            <AppBar/>
            <Box sx={{height: {xs: 60, md: 80}}}/>
            {petsList.length > 0 ? (
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    <Grid item="true" key={-1} xs={12} sm={6} md={4} sx={gridItemStyles}>
                        <AddPetForm/>
                    </Grid>
                    {petsList.map((p, i) => (
                        <Grid item="true" key={i} xs={12} sm={6} md={4} sx={gridItemStyles}>
                            <PetCard key={i}
                                     _id={p._id}
                                     name={p.name}
                                     species={p.species}
                                     description={p.description}
                                     image_url={p.image_url}
                                     time_spotted={p.time_spotted}
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
                        Loading...
                    </Typography>
                </Box>
            )}
        </Box>
    );
}


export default Dashboard;