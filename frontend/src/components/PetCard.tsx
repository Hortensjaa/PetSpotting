import * as React from 'react';
import {format} from "date-fns";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Pet from "../types/Pet.ts";
import {Box} from "@mui/material";


export default function PetCard(pet: Pet) {
    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: (theme) => theme.palette.secondary.main }} aria-label="user">
                        U
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={pet.name}
                subheader={pet.timeSpotted ? format(new Date(pet.timeSpotted), 'HH:mm:ss | dd.MM.yyyy') : "???"}
            />
            <CardMedia
                component="img"
                image={pet.imageUrl ? pet.imageUrl : 'https://placehold.co/600x800'}
                alt={pet.name}
                sx={{
                    height: {
                        md: 500,
                        sm: 500,
                    },}}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {pet.description ? pet.description : ""}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}
