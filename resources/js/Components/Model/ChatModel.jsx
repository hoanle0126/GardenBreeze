/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import { Avatar, Button, IconButton, Modal } from "@mui/material";

const ChatModel = ({ open, handleClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <span className="text-[21px] font-[600]">Hoanf</span>
                        <span className="text-[14px]">Online</span>
                    </div>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
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
                            <div className="max-w-[50%] bg-green/30 px-[20px] py-[5px] text-right rounded-2xl break-words">
                                ba
                            </div>
                        </li>
                    </ul>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="h-[80px] border-t flex items-center p-[20px] gap-[30px]"
                >
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
                    >
                        Send
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default ChatModel;
