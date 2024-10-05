import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid2';

import './styles/App.css'
import Pet from "./types/Pet.ts";
import PetCard from "./components/PetCard.tsx";

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
        <div className="App">
            <h1>Welcome to PetSpotting App</h1>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {petsList.map((p) => (
                    <Grid item key={p._id} xs={12} sm={6} md={4} lg={3}>
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
