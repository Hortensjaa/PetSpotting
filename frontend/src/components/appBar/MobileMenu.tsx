import * as React from 'react';
import { Menu } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MobileMenuItem from "./MobileMenuItem.tsx";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {backendUrl} from "../../consts.ts";
import {useContext} from "react";
import {UserContext} from "../../userProvider.tsx";

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
    const { state: thisUser, actions } = useContext(UserContext)
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
            <Link to={`/profile/${thisUser?.user_id}`} style={{ color: 'inherit', textDecoration: 'inherit'  }}>
                <MobileMenuItem icon={<AccountCircle />} text="Profile" badgeNum={0} />
            </Link>
            <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <MobileMenuItem icon={<DashboardIcon />} text="Dashboard" badgeNum={0} />
            </Link>
            <MobileMenuItem icon={<PeopleAltIcon />} text="New posts" badgeNum={5} />
            <MobileMenuItem icon={<CommentIcon />} text="Comments" badgeNum={4} />
            <MobileMenuItem icon={<FavoriteIcon />} text="Reactions" badgeNum={12} />
            <Link to={`${backendUrl}/logout`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <MobileMenuItem icon={<LogoutIcon />} text="Log out" badgeNum={0} />
            </Link>
        </Menu>
    );
};

export default MobileMenu;
