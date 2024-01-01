import {
    Avatar,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    alpha,
  } from "@mui/material";
  import { useEffect, useRef, useState } from "react";
  import ProfileIcon from "icons/profile";
  import LogoutIcon from "icons/logout";
  import OrderIcon from "icons/order";
import { router } from "@inertiajs/react";

const AvatarClient = ({user}) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === "Tab") {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    const logout = () => {
      router.post(route("logout"))
    };

    return (
        <>
          <Avatar
            src={user?.avatar}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="cursor-pointer"
          />
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            placement="bottom-end"
            transition
            disablePortalPaperProps={{
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
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-end" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
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
                    >
                      <div className="flex-center min-w-[150px] px-[20px] h-[60px] flex-col border-b border-dashed">
                        <span className="text-[18px] font-[600]">{user?.name}</span>
                        <span className="text-[14px] text-gray-500">
                          {user?.role}
                        </span>
                      </div>
                      <MenuItem
                        onClick={() => router.visit(route("client.edit"))}
                        className="flex gap-[10px] items-center"
                      >
                        <ProfileIcon size={18} primary={alpha("#000", 0.7)} />
                        <span>Profile</span>
                      </MenuItem>
                      <MenuItem
                        onClick={() => router.visit("/order")}
                        className="flex gap-[10px] items-center"
                      >
                        <OrderIcon size={18} primary={alpha("#000", 0.7)} />
                        <span>My order</span>
                      </MenuItem>
                      <MenuItem
                        onClick={logout}
                        className="flex gap-[10px] items-center"
                      >
                        <LogoutIcon size={18} primary={alpha("#000", 0.7)} />
                        <span>Logout</span>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </>
    );
};

export default AvatarClient;
