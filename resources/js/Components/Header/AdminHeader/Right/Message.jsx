import { primary } from "@/Contexts/ColorContext";
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
            <IconButton onClick={handleClick}>
                <MessageIcon
                    size={30}
                    primary={alpha(primary, 0.5)}
                    secondary={alpha(primary, 0.7)}
                />
            </IconButton>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem sx={{ padding: 0 }}>
                    <div className="flex items-center w-[300px] h-[40px] border-b text-[18px] px-[10px] font-[500]">
                        Messages
                    </div>
                </MenuItem>
                {[1, 1, 1].map((index) => (
                    <MenuItem key={index}>
                        <div className="flex items-center">
                            <Avatar />
                            <div className="flex flex-col">
                                <span className="text-[16px]">Profile</span>
                                <span className="text-[14px] text-gray-500 line-clamp-1 flex w-[230px]">
                                    ProfileProfileProfileProfileProfileProfileProfileProfileProfileProfileProfileProfileProfile
                                </span>
                            </div>
                        </div>
                    </MenuItem>
                ))}
                <MenuItem sx={{ padding: 0 }}>
                    <div className="text-[14px] text-gray-500 border-t w-full p-[5px] flex-center">
                        View More
                    </div>
                </MenuItem>
            </Menu>
        </>
    );
};

export default Message;
