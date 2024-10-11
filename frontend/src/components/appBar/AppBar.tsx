import * as React from 'react';
import Box from '@mui/material/Box';
import AppBarContent from "./AppBarContent.tsx";
import MobileMenu from "./MobileMenu.tsx";


export default function AppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement | undefined>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement | undefined>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarContent
                handleProfileMenuOpen={handleProfileMenuOpen}
                handleMobileMenuOpen={handleMobileMenuOpen}
                menuId={menuId}
                mobileMenuId={mobileMenuId}
            />
            <MobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                mobileMenuId={mobileMenuId}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
        </Box>
    );
}
