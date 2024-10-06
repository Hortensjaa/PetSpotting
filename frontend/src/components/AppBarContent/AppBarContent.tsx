import * as React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Add} from "@mui/icons-material";
import { Search, SearchIconWrapper, StyledInputBase } from './Search.tsx'

interface AppBarContentProps {
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    menuId: string;
    mobileMenuId: string;
}

const AppBarContent: React.FC<AppBarContentProps> = ({  handleMobileMenuOpen, mobileMenuId }) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="add pet" sx={{ mr: 2 }}>
                    <Add />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }} >
                    Pet Spotting
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new comments" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <CommentIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 17 new reactions" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarContent;
