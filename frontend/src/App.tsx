import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid2';

import Pet from "./types/Pet.ts";
import PetCard from "./components/PetCard.tsx";
import AppBar from "./components/AppBar.tsx";
import {Box} from "@mui/material";
import AddPetForm from "./components/AddPetForm.tsx";

function App() {
    const [petsList, setPets] = useState<Pet[]>([]);

    useEffect(() => {

        fetch('/api/pets', {method: 'GET'})
            .then((response) => response.json())
            .then((data) => {
                setPets(data)
            });
    }, []);

    return (
            <Box sx={{width: {xs: '100%'}}}>
                <AppBar/>
                <Box sx={{height: {xs: 60, md: 80}}}/>
                <AddPetForm/>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    {petsList.map((p, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} sx={{
                            marginX: {xs: 0, sm: 2, md: 5},
                            marginY: {xs: 0, sm: 0, md: 0},
                            width: {xs: '100%', sm: '50%', md: '25%'}
                        }}>
                            <PetCard key={i}
                                _id={p._id}
                                name={p.name}
                                species={p.species}
                                description={p.description}
                                imageUrl={p.imageUrl}
                                timeSpotted={p.timeSpotted}
                            />
                        </Grid>
                    ))}
                    </Grid>
            </Box>
    );
}


export default App;
