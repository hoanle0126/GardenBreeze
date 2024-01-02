import { primary } from "@/Contexts/ColorContext";
import { router } from "@inertiajs/react";
import { Avatar, IconButton, Menu, MenuItem, alpha } from "@mui/material";
import MessageIcon from "icons/message";
import { useState } from "react";

const Message = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton onClick={()=>{
                router.visit("/admin/chat")
            }}>
                <MessageIcon
                    size={30}
                    primary={alpha(primary, 0.5)}
                    secondary={alpha(primary, 0.7)}
                />
            </IconButton>
        </>
    );
};

export default Message;
