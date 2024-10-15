import * as React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Box, Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Search, SearchIconWrapper, StyledInputBase } from './Search.tsx'
import AppBarIcon from "./AppBarIcon.tsx";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../userProvider.tsx";
import Avatar from "@mui/material/Avatar";

interface AppBarContentProps {
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    menuId: string;
    mobileMenuId: string;
}

const AppBarContent: React.FC<AppBarContentProps> = ({  handleMobileMenuOpen, mobileMenuId }) => {
    const { state: user, actions } = useContext(UserContext);

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>
                    <Tooltip title={
                        <>
                            Functionalities that will be added soon: <br/>
                            - search bar <br/>
                            - creating account <br/>
                            - commenting and reacting to posts <br/>
                            - editing and deleting posts <br/>
                            - share links
                        </>
                    }>
                        <IconButton size="large" edge="start" color="inherit" aria-label="info" sx={{ mr: 2 }}>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Link to="/dashboard" style={{ color: 'inherit', textDecoration: "inherit"  }}>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }} >
                        Pet Spotting
                    </Typography>
                </Link>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <AppBarIcon icon={<PeopleAltIcon />} textOnHover={"New posts"} badgeNum={5}/>
                    <AppBarIcon icon={<CommentIcon />} textOnHover={"New comments"} badgeNum={4}/>
                    <AppBarIcon icon={<FavoriteIcon />} textOnHover={"New reactions"} badgeNum={12}/>
                    <Link to="/profile" style={{ color: 'inherit' }}>
                        <Avatar
                            alt={user?.name}
                            src={user?.avatar_url}
                            sx={{ width: 40, height: 40, marginLeft: 3, textDecoration: "inherit"  }}
                        />
                    </Link>
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
