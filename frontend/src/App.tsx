import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid2';

import Pet from "./types/Pet.ts";
import PetCard from "./components/PetCard.tsx";
import AppBar from "./components/AppBar.tsx";

function App() {
    const [petsList, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        fetch('/api/pets')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPets(data)
            });
    }, []);

    return (
        <div className="App" >
            <AppBar />
            <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                {petsList.map((p) => (
                    <Grid item key={p._id} xs={12} sm={6} md={4} sx={{
                        margin: { xs: 0, sm: 2, md: 5 },
                    }}>
                        <PetCard
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
        </div>
    );
}


export default App;
