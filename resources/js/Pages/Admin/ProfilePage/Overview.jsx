/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import { Avatar, Button, Modal } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { router, usePage } from "@inertiajs/react";

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

const Overview = () => {
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
                <span>Profile Details</span>
                <Button variant="contained" onClick={handleOpen}>
                    Edit Profile
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="absolute-center w-[800px] bg-white shadow rounded-md py-[30px] px-[90px] text-[18px] flex flex-col gap-[30px]"
                    >
                        <Close
                            className="absolute right-[10px] top-[10px] cursor-pointer"
                            onClick={handleClose}
                        />
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <Avatar
                                    src={detail?.avatar}
                                    variant="rounded"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </div>
                            <div className="col-span-8 flex items-end">
                                <Button
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={handleSelectImage}
                                    />
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4  flex items-center">
                                Fullname
                            </div>
                            <div className="col-span-8 flex items-center">
                                <input
                                    type="text"
                                    value={detail?.name}
                                    className="border outline-none h-[40px] p-[10px] w-full rounded"
                                    onChange={(e) =>
                                        setDetail({
                                            ...detail,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4  flex items-center">
                                Phone contact
                            </div>
                            <div className="col-span-8 flex items-center">
                                <input
                                    type="text"
                                    value={detail?.phone}
                                    className="border outline-none h-[40px] p-[10px] w-full rounded"
                                    onChange={(e) =>
                                        setDetail({
                                            ...detail,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4  flex items-center">
                                Address
                            </div>
                            <div className="col-span-8 flex items-center">
                                <input
                                    type="text"
                                    value={detail?.address}
                                    className="border outline-none h-[40px] p-[10px] w-full rounded"
                                    onChange={(e) =>
                                        setDetail({
                                            ...detail,
                                            address: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <Button type="submit" fullWidth variant="contained">
                            Submit
                        </Button>
                    </form>
                </Modal>
            </div>
            <div className="p-[20px] flex flex-col gap-[20px]">
                <div className="grid grid-cols-12">
                    <span className="col-span-4">Fullname</span>
                    <span className="col-span-7 font-[600]">{props.auth.user.name}</span>
                </div>
                <div className="grid grid-cols-12">
                    <span className="col-span-4">Email</span>
                    <span className="col-span-7 font-[600]">{props.auth.user.email}</span>
                </div>
                <div className="grid grid-cols-12">
                    <span className="col-span-4">Contact Phone</span>
                    <span className="col-span-7 font-[600]">{props.auth.user.phone}</span>
                </div>
                <div className="grid grid-cols-12">
                    <span className="col-span-4">Address</span>
                    <span className="col-span-7 font-[600]">
                        {props.auth.user.address}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Overview;
