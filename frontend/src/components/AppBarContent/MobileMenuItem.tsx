import {ReactNode} from "react";
import * as React from "react";
import {Badge, IconButton, MenuItem} from "@mui/material";

interface MobileMenuItemProps {
    icon: ReactNode;
    text: string;
    badgeNum: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({  icon, text, badgeNum }) => {
    return (
        <MenuItem>
            <IconButton size="large" color="inherit">
                <Badge badgeContent={badgeNum} color="secondary">
                    {icon}
                </Badge>
            </IconButton>
            <p>{text}</p>
        </MenuItem>
    )
}

export default MobileMenuItem;