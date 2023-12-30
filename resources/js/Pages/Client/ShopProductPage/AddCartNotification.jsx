import { primary } from "@/Contexts/ColorContext";
import { Modal, alpha } from "@mui/material";
import React from "react";
import TickIcon from "resources/assets/icons/tick";

const AddCartNotification = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
            }}
            slotProps={{
                backdrop: { style: { opacity: 0 } },
            }}
        >
            <div className="w-[400px] h-[250px] bg-black/80 absolute-center flex-center flex-col rounded-xl">
                <TickIcon size={120} primary={alpha(primary, 0.8)} />
                <span className="text-white/80 text-[32px]">Add to cart</span>
            </div>
        </Modal>
    );
};

export default AddCartNotification;
