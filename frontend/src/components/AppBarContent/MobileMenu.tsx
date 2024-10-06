import * as React from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface MobileMenuProps {
    mobileMoreAnchorEl: HTMLElement | null | undefined;
    mobileMenuId: string;
    isMobileMenuOpen: boolean;
    handleMobileMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
                                                   mobileMoreAnchorEl,
                                                   mobileMenuId,
                                                   isMobileMenuOpen,
                                                   handleMobileMenuClose,
                                                   handleProfileMenuOpen,
                                               }) => {
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new comments" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <CommentIcon />
                    </Badge>
                </IconButton>
                <p>Comments</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new reactions" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Reactions</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton size="large" aria-label="account of current user" aria-controls={mobileMenuId} aria-haspopup="true" color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
};

export default MobileMenu;
