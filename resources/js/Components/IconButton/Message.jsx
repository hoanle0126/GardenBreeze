import { primary, secondary } from "@/Contexts/ColorContext";
import { IconButton, alpha } from "@mui/material";
import React from "react";
import MessageIcon from "resources/assets/icons/message";

const MessageIconButton = () => {
    return (
        <IconButton>
            <MessageIcon
                size={30}
                primary={alpha(primary, 0.7)}
                secondary={alpha(secondary, 0.7)}
            />
        </IconButton>
    );
};

export default MessageIconButton;
