import * as React from "react";
import {Badge, IconButton, Tooltip} from "@mui/material";
import {ReactNode} from "react";

interface AppBarIconProps {
    icon: ReactNode;
    textOnHover: string;
    badgeNum: number;
}

const AppBarIcon: React.FC<AppBarIconProps> = ({  icon, textOnHover, badgeNum }) => {
    return (
        <Tooltip title={textOnHover}>
            <IconButton size="large" color="inherit">
                <Badge badgeContent={badgeNum} color="secondary">
                    {icon}
                </Badge>
            </IconButton>
        </Tooltip>
    )
}

export default AppBarIcon;