import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { Avatar, Button } from "@mui/material";

function ChatPage() {
    return (
        <AdminLayout>
            <Head title="Chat"/>
            <section className="header__top">
                <span className="header__top--header">Chat</span>
                <div className="header__top--breadcrumbs">
                <span className="text-gray-1 font-[600]">Home</span>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Chat</span>
                </div>
            </section>
            <section className="w-full grid grid-cols-12 gap-[30px]">
                <div className="card col-span-4 p-[20px] flex flex-col gap-[20px]">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none bg-gray-200/70 w-full h-[40px] rounded-lg p-[10px]"
                    />
                    <div className="w-full h-[400px] overflow-y-scroll overflow-x-hidden flex flex-col gap-[15px]">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                            (index) => (
                                <div
                                    key={index}
                                    className="flex gap-[20px] items-center h-[40px] w-full"
                                >
                                    <Avatar />
                                    <div className="flex flex-col">
                                        <span className="text-[18px] line-clamp-1 font-[600]">
                                            Hoan
                                        </span>
                                        <span className="text-[14px] line-clamp-1 w-[230px] text-gray-600">
                                            HoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoan
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="card col-span-8 flex flex-col justify-between">
                    <div className="h-[70px] w-full border-b flex flex-col justify-center p-[20px]">
                        <span className="text-[21px] font-[600]">Hoanf</span>
                        <span className="text-[14px]">Online</span>
                    </div>
                    <div className="w-full flex-1 p-[20px] flex items-end">
                        <ul className="w-full flex flex-col-reverse">
                            <li className="w-full flex justify-start flex-col items-start gap-[10px]">
                                <div className="flex items-end h-[30px] gap-[5px]">
                                    <Avatar style={{ width: 30, height: 30 }} />
                                    <span>Le Van Xuan Hoan</span>
                                </div>
                                <div className="max-w-[50%] bg-orange-400/30 px-[20px] py-[5px] text-left rounded-2xl break-words">
                                    a
                                </div>
                            </li>
                            <li className="w-full flex justify-end">
                                <div className="max-w-[50%] bg-primary/30 px-[20px] py-[5px] text-right rounded-2xl break-words">
                                    ba
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form className="h-[80px] border flex items-center p-[20px] gap-[30px]">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="flex-1 outline-none bg-gray-200 h-[40px] rounded-md p-[10px]"
                            placeholder="Enter text..."
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ height: 40 }}
                            onClick={(e) => e.preventDefault()}
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
