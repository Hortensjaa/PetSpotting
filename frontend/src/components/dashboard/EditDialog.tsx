import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import * as React from "react";
import {speciesList} from "../../types/Pet.ts";
import {useState} from "react";
import Typography from "@mui/material/Typography";

interface EditDialogProps {
    initialName: string;
    initialDescription: string;
    initialSpecies: string;
    editing: boolean;
    setEditing: (editing: boolean) => void;
    saveAction: (name: string, description: string, species: string) => void;
}

const EditDialog = ({initialName, initialDescription, initialSpecies,
                        editing, setEditing, saveAction}: EditDialogProps) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [species, setSpecies] = useState(initialSpecies);

    return (
        <Dialog
            open={editing}
            onClose={() => setEditing(false)}
        >
            <DialogTitle>
                <Typography textAlign="center" width='100%' color='secondary'>
                    Edit post
                </Typography>
            </DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column',padding: 2, gap: 2}}>
                <DialogContentText>
                    You can edit your post here.
                </DialogContentText>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    multiline
                    rows={2}
                    fullWidth
                    inputProps={{ maxLength: 130 }}
                />
                <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center'}}>
                    {speciesList.map((s, i) => (
                        <Chip
                            key={i}
                            label={s}
                            onClick={() => setSpecies(s)}
                            color={s === species ? 'primary' as 'primary' : 'default' as 'default'}
                            variant={s === species ? 'filled' as 'filled' : 'outlined' as 'outlined'}
                        />
                    ))}
                </Box>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={() => setEditing(false)}>
                    Cancel
                </Button>
                <Button color="secondary" onClick={() => {
                    setEditing(false);
                    saveAction(name, description, species);
                }}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;