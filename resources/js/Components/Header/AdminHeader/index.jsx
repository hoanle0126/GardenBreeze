/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import ColorContext from "@/Contexts/ColorContext";
import LogoEverprimary from "resources/assets/logo";
import RightAdmin from "./Right/RightAdmin";
import { Link } from "@inertiajs/react";

const AdminHeader = ({ side, setSide }) => {
    useEffect(() => {
        console.log(window.innerWidth);
        const handleScroll = () => {
            if (window.innerWidth < 1024) {
                setSide(false);
            } else {
                setSide(true);
            }
        };
        window.addEventListener("resize", handleScroll);
    }, [window.innerWidth]);
    return (
        <header className="h-[60px] w-full flex items-center justify-between bg-white fixed top-0 shadow-md z-[1000] px-[20px]">
            <Link href="dashboard" className="flex h-full items-center">
                <LogoEverprimary
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
