import {useEffect, useState} from 'react'

import './styles/App.css'

function App() {
    const [petsList, setPets] = useState([]);

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
            {petsList.map(p => {
                return (
                    <div key={p._id}>
                        <h2>{p.name}</h2>
                        <p>{p.species}</p>
                    </div>
                );
            })}
        </div>
    );
}


export default App;
