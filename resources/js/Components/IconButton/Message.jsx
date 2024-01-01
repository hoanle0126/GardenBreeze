import { primary, secondary } from "@/Contexts/ColorContext";
import { IconButton, alpha } from "@mui/material";
import React, { useState } from "react";
import MessageIcon from "resources/assets/icons/message";
import ChatModel from "../Model/ChatModel";

const MessageIconButton = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <IconButton onClick={()=>setOpen(true)}>
                <MessageIcon
                    size={30}
                    primary={alpha(primary, 0.7)}
                    secondary={alpha(secondary, 0.7)}
                />
            </IconButton>
            <ChatModel open={open} handleClose={()=>setOpen(false)}/>
        </>
    );
};

export default MessageIconButton;
