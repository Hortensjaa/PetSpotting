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
import {Box, Tooltip} from "@mui/material";

import {PetResponse} from "../../types";


export default function PetCard(pet: PetResponse) {
    const handleImageClick = (imageUrl) => {
        if (imageUrl) {
            window.open(imageUrl, "_blank");
        }
    };

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Tooltip title={pet.user_name ? pet.user_name : "Anonymous"}>
                        <Avatar
                            src={pet.user_avatar ? pet.user_avatar : undefined}
                            alt={pet.user_name ? pet.user_name : "Anonymous"}
                            sx={{ bgcolor: (theme) => theme.palette.secondary.main }}
                            aria-label="user"
                        />
                    </Tooltip>

                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={pet.name}
                subheader={pet.time_spotted ? format(new Date(pet.time_spotted), 'HH:mm:ss | dd.MM.yyyy') : "???"}
            />
            <CardMedia
                component="img"
                image={pet.image_url ? pet.image_url : 'https://placehold.co/600x800'}
                alt={pet.name}
                onError={(e) => e.target.src = 'https://placehold.co/600x800'}
                onClick={() => handleImageClick(pet.image_url)}
                sx={{
                    cursor: pet.image_url ? 'pointer' : 'default',
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
