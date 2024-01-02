import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function ChatPage() {
    const { props } = usePage();
    const [userReceive, setUserReceive] = useState(props.auth.members[0]);
    const [message, setMessage] = useState("");
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
            user_receive: userReceive.id,
            message: sendMessage,
        });
    };
    return (
        <AdminLayout>
            <Head title="Chat" />
            <section className="header__top">
                <span className="header__top--header">Chat</span>
                <div className="header__top--breadcrumbs">
                    <span className="text-gray-1 font-[600]">Home</span>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Chat</span>
                </div>
            </section>
            <section className="w-full grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="card border lg:col-span-4 col-span-1 p-[20px] flex flex-col gap-[20px]">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none hidden lg:block bg-gray-200/70 w-full h-[40px] rounded-lg p-[10px]"
                    />
                    <div className="w-full lg:h-[400px] h-fit lg:overflow-y-scroll overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden flex lg:flex-col flex-row gap-[15px]">
                        {props.auth.members
                            .filter((m) => m.role !== "Admin")
                            .map((member, index) => (
                                <div
                                    key={index}
                                    className="flex gap-[20px] items-center h-[40px] w-full cursor-pointer"
                                    onClick={() => {
                                        setUserReceive(member);
                                    }}
                                >
                                    <Avatar src={member.avatar} />
                                    <div className="flex flex-col">
                                        <span className="text-[18px] line-clamp-1 font-[600]">
                                            {member.name}
                                        </span>
                                        <span className="text-[14px] line-clamp-1 w-[230px] text-gray-600">
                                            {member.email}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="card lg:col-span-8 col-span-1 flex flex-col justify-between">
                    <div className="h-[70px] w-full border-b flex flex-col justify-center p-[20px]">
                        <span className="text-[21px] font-[600]">
                            {userReceive.name}
                        </span>
                        <span className="text-[14px]">{userReceive.email}</span>
                    </div>
                    <div className="w-full flex-1 p-[20px] flex items-end">
                        <ul className="w-full flex flex-col gap-[10px]  overflow-y-scroll h-[380px]">
                            {listMessage.map((mess, index) => (
                                <div key={index} className="">
                                    {mess.status==="receive"&&<li className="w-full flex justify-start flex-col items-start gap-[10px]">
                                        <div className="flex items-end h-[30px] gap-[5px]">
                                            <Avatar
                                                src={userReceive.avatar}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            />
                                            <span>{userReceive.name}</span>
                                        </div>
                                        <div className="max-w-[50%] bg-orange-400/30 px-[20px] py-[5px] text-left rounded-2xl break-words">
                                            {mess.message}
                                        </div>
                                    </li>}
                                    {mess.status==="send"&&<li className="w-full flex justify-end">
                                        <div className="max-w-[50%] bg-primary/30 px-[20px] py-[5px] text-right rounded-2xl break-words">
                                            {mess.message}
                                        </div>
                                    </li>}
                                </div>
                            ))}
                        </ul>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="h-[80px] border flex items-center p-[20px] gap-[30px]"
                    >
                        <input
                            type="text"
                            value={sendMessage}
                            className="flex-1 outline-none bg-gray-200 h-[40px] rounded-md p-[10px]"
                            placeholder="Enter text..."
                            onChange={(e) => setSendMessage(e.target.value)}
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
            </section>
        </AdminLayout>
    );
}

export default ChatPage;
