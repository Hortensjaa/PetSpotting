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
import {Box, Menu, MenuItem, Tooltip} from "@mui/material";

import {PetResponse} from "../../types";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../userProvider.tsx";


export default function PetCard(pet: PetResponse) {
    const { state: user, actions } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleted, setDeleted] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleImageClick = (imageUrl) => {
        if (imageUrl) {
            window.open(imageUrl, "_blank");
        }
    };

    const deleteAction = async () => {
        setAnchorEl(null);
        const response = await fetch(
            `/api/pets/${pet.id}`,
            { method: 'DELETE', redirect: "follow", credentials: 'include' }
        ).then((response) => response);
        setDeleted(true)
    }

    const editAction = async () => {
        setAnchorEl(null);
    }

    return (
        <Card sx={{ width: deleted ? '0%' : '100%' }}>
            <CardHeader
                avatar={
                    <Tooltip title={pet.user_name ? pet.user_name : "Anonymous"}>
                        <Link to={`/profile/${pet.user_id}`} style={{ color: 'inherit', textDecoration: "inherit" }}>
                            <Avatar
                                src={pet.user_avatar ? pet.user_avatar : undefined}
                                alt={pet.user_name ? pet.user_name : "Anonymous"}
                                sx={{ bgcolor: (theme) => theme.palette.secondary.main }}
                                aria-label="user"
                            />
                        </Link>
                    </Tooltip>

                }
                action={
                    (user?.user_id === pet.user_id) ? (
                        <Box>
                            <IconButton
                                aria-label="settings"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={editAction}>Edit</MenuItem>
                                <MenuItem onClick={deleteAction}>Delete</MenuItem>
                            </Menu>
                        </Box>
                    ) : null
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
