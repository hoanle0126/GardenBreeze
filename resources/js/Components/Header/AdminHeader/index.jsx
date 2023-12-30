/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import ColorContext from "@/Contexts/ColorContext";
import LogoEvergreen from "resources/assets/logo";
import RightAdmin from "./Right/RightAdmin";
import { Link } from "@inertiajs/react";

const AdminHeader = ({ side, setSide }) => {
    return (
        <header className="h-[60px] w-full flex items-center justify-between bg-white fixed top-0 shadow-md z-[1000] px-[20px]">
            <Link href="dashboard" className="flex h-full items-center">
                <LogoEvergreen
                    primary={ColorContext.palette.primary.main}
                    size={50}
                />
                <span className="text-[28px] font-[700] ">Garden</span>
            </Link>
            <MenuIcon
                className="fixed left-[270px] cursor-pointer"
                sx={{ fontSize: "48px" }}
                color="primary"
                onClick={() => setSide(!side)}
            />
            <RightAdmin />
        </header>
    );
};

export default AdminHeader;
