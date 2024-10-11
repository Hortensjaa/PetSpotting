import * as React from 'react';
import { Menu } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MobileMenuItem from "./MobileMenuItem.tsx";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface MobileMenuProps {
    mobileMoreAnchorEl: HTMLElement | null | undefined;
    mobileMenuId: string;
    isMobileMenuOpen: boolean;
    handleMobileMenuClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
                                                   mobileMoreAnchorEl,
                                                   mobileMenuId,
                                                   isMobileMenuOpen,
                                                   handleMobileMenuClose,
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
            <MobileMenuItem icon={<PeopleAltIcon />} text="New posts" badgeNum={5} />
            <MobileMenuItem icon={<CommentIcon />} text="Comments" badgeNum={4} />
            <MobileMenuItem icon={<FavoriteIcon />} text="Reactions" badgeNum={12} />
            <MobileMenuItem icon={<AccountCircle />} text="Profile" badgeNum={0} />
        </Menu>
    );
};

export default MobileMenu;
