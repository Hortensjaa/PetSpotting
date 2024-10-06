import {ChangeEvent, useState} from "react";
import {
    Box,
    Button, Chip, FormControl,
    Input, InputLabel,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";

import {speciesList} from "../types/Pet.ts";


const AddPetForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState('')
    const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('OTHER');
    const [description, setDescription] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target?.files[0]);
            setFileUrl(URL.createObjectURL(e.target?.files[0]))
        }
    };

    const handleChipClick = (species: string) => {
        setSpecies(species);
    };

    const handleUpload = async () => {
        if (file) {
            console.log('Uploading file...');
            const formData = new FormData();
            formData.append('name', name);
            formData.append('species', species);
            formData.append('description', description);
            formData.append('image', file);

            try {
                const res = await fetch('api/pets', {
                    method: 'POST',
                    body: formData,
                });
                const resJson = await res.json();
                console.log(resJson);
                setName("")
                setDescription("")
                setFile(null)
                setFileUrl('')
                setSpecies('OTHER')

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: {xs: 0, sm: 2, md: 2},
                borderRadius: {xs: 0, sm: 1, md: 1},
                boxShadow: {xs: 0, sm: 1, md: 2},
            }}
        >
            <Typography variant="h4" textAlign="center" width='100%' color='secondary'>
                Spot pet
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
            />
            <FormControl fullWidth>
                <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor="file">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        cursor: 'pointer'
                    }}>
                        <img
                            src={fileUrl ? fileUrl : "https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"}
                            alt="your image"
                            width="250px"
                            height="300px"
                        />
                    </Box>
                </label>
            </FormControl>
            <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center'}}>
                {speciesList.map((s, i) => (
                    <Chip
                        key={i}
                        label={s}
                        onClick={() => handleChipClick(s)}
                        color={s === species ? 'primary' as 'primary' : 'default' as 'default'}
                        variant={s === species ? 'filled' as 'filled' : 'outlined' as 'outlined'}
                    />
                ))}
            </Box>
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={e => setDescription(e.target.value)}
                multiline
                rows={2}
                fullWidth
            />
            <Button
                onClick={handleUpload}
                variant="contained"
                color="secondary"
                disabled={!file || !name}
                sx={{mt: 2}}
            >
                Share
            </Button>
        </Box>
    );
};

export default AddPetForm