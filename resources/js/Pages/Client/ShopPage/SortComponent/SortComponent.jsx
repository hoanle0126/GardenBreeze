import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import SortIcon from "resources/assets/icons/sort";

const SortComponent = ({filter,setFilter}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="w-full h-[60px] border-b flex items-center px-[60px] py-[15px] gap-[10px]">
            <Button
                variant={"contained"}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<SortIcon size={14} color={"#fff"} />}
            >
                Sort
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    onClick={() =>
                        setFilter({ ...filter, sort: "Decrease By Price" })
                    }
                    sx={{
                        backgroundColor:
                            filter.sort === "Decrease By Price" && "#f5f5f5",
                    }}
                >
                    Decrease By Price
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        setFilter({ ...filter, sort: "Increase By Price" })
                    }
                    sx={{
                        backgroundColor:
                            filter.sort === "Increase By Price" && "#f5f5f5",
                    }}
                >
                    Increase By Price
                </MenuItem>
                <MenuItem
                    onClick={() => setFilter({ ...filter, sort: "Lastest" })}
                    sx={{
                        backgroundColor: filter.sort === "Lastest" && "#f5f5f5",
                    }}
                >
                    Lastest
                </MenuItem>
            </Menu>
            <div className="border h-[40px] px-[15px] rounded-lg flex items-center gap-[0px] text-primary/70 border-primary/70 cursor-default">
                <span>
                    {filter.sort}
                </span>
            </div>
        </div>
    );
};

export default SortComponent;
