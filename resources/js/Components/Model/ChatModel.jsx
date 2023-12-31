/* eslint-disable react/prop-types */
import { usePage } from "@inertiajs/react";
import { Close } from "@mui/icons-material";
import { Avatar, Button, IconButton, Modal } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const ChatModel = ({ open, handleClose }) => {
    const { props } = usePage();
    const admin = props.admin;
    const [listMessage, setListMessage] = useState([]);
    Echo.private(`chat.greet.${props.auth.user.id}`).listen(
        "PrivateMessageEvent",
        (e) => {
            console.log(e);
            setListMessage([
                ...listMessage,
                {
                    message: e.message,
                    status: "receive",
                },
            ]);
        }
    );
    const [sendMessage, setSendMessage] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setListMessage([
            ...listMessage,
            {
                message: sendMessage,
                status: "send",
            },
        ]);
        axios.post(route("chat.send"), {
            user_receive: admin.id,
            message: sendMessage,
        });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="card flex flex-col justify-between absolute-center h-[600px] w-[1000px]">
                <div className="h-[70px] items-center justify-between flex p-[20px]  border-b">
                    <div className="h-[70px] w-full flex flex-col justify-center">
                        <span className="text-[21px] font-[600]">
                            {admin.name}
                        </span>
                        <span className="text-[14px]">{admin.role}</span>
                    </div>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </div>
                <div className="w-full flex-1 p-[20px] flex items-end">
                    <ul className="w-full flex flex-col gap-[10px] overflow-y-scroll h-[400px]">
                        {listMessage?.map((mess, index) => (
                            <div key={index} className="w-full flex">
                                {mess.status === "receive" && (
                                    <li className="w-full flex justify-start flex-col items-start gap-[10px]">
                                        <div className="flex items-end h-[30px] gap-[5px]">
                                            <Avatar
                                                src={admin.avatar}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            />
                                            <span>{admin.name}</span>
                                        </div>
                                        <div className="max-w-[50%] bg-orange-400/30 px-[20px] py-[5px] text-left rounded-2xl break-words">
                                            {mess.message}
                                        </div>
                                    </li>
                                )}
                                {mess.status === "send" && (
                                    <li className="w-full flex justify-end">
                                        <div className="max-w-[50%] bg-primary/30 px-[20px] py-[5px] text-right rounded-2xl break-words">
                                            {mess.message}
                                        </div>
                                    </li>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="h-[80px] border-t flex items-center p-[20px] gap-[30px]"
                >
                    <input
                        type="text"
                        value={sendMessage}
                        className="flex-1 outline-none bg-gray-200 h-[40px] rounded-md p-[10px]"
                        placeholder="Enter text..."
                        onChange={(e)=>setSendMessage(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ height: 40 }}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default ChatModel;
