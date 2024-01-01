/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import { Avatar, Button, Modal } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { router, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const Setting = () => {
    const [open, setOpen] = useState(false);
    const { props } = usePage();
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setDetail(user);
        setOpen(false);
    };
    const user = props.auth.user;
    const [detail, setDetail] = useState(user);

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setDetail({
            ...detail,
            avatar: imgUrl,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route("profile.update"), detail, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };

    return (
        <section className="w-full card">
            <div className="text-[18px] font-[600] px-[20px] py-[10px] border-b flex items-center justify-between">
                <span>Change password</span>
            </div>
            <form className="p-[20px] flex flex-col gap-[20px]">
                <div className="grid grid-cols-12">
                    <span className="col-span-4 flex items-center">Current password</span>
                    <TextInput type="password" className="col-span-7 font-[600]"/>
                </div>
                <div className="grid grid-cols-12">
                    <span className="col-span-4  flex items-center">New password</span>
                    <TextInput type="password" className="col-span-7 font-[600]"/>
                </div>
                <div className="grid grid-cols-12">
                    <span className="col-span-4  flex items-center">Comfirm new password</span>
                    <TextInput type="password" className="col-span-7 font-[600]"/>
                </div>
                <div className="grid grid-cols-12 flex-center">
                    <Button type="submit" fullWidth variant="contained">Submit</Button>
                </div>
            </form>
        </section>
    );
};

export default Setting;
