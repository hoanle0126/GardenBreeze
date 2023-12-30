import { Button, alpha } from "@mui/material";
import React from "react";
import AvatarClient from "../Avatar/AvatarClient";
import { Link, router, usePage } from "@inertiajs/react";
import LogoEvergreen from "resources/assets/logo";
import { primary } from "@/Contexts/ColorContext";
import CartIconButton from "../IconButton/Cart";

const ClientHeader = ({ user }) => {
    const { url } = usePage();
    const [header, setHeader] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHeader(false);
            } else {
                setHeader(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`duration-100 flex justify-between px-[120px] h-[60px] top-0 left-0 items-center w-full fixed z-[1000] border-b ${
                url !== "/" || !header
                    ? "border-gray-200  bg-[#f9f9f9]"
                    : "border-transparent"
            }`}
        >
            <Link href="/" className="flex items-center text-[24px] font-[600]">
                <LogoEvergreen size={40} primary={alpha(primary, 0.7)} />
                <span>Garden</span>
            </Link>
            <div className="flex gap-[20px] h-full text-[18px] items-center w-[30%] justify-between font-[600]">
                <Link
                    href={"/"}
                    className={`${url === "/" && "text-primary/70"}`}
                >
                    Home
                </Link>
                <Link
                    href={"/shop"}
                    className={`${url.startsWith("/shop") && "text-primary/70"}`}
                >
                    Shop
                </Link>
                <Link
                    href={"/contact"}
                    className={`${url === "/contact" && "text-primary/70"}`}
                >
                    Contact
                </Link>
            </div>
            {user ? (
                <div className="h-[60px] flex items-center justify-end gap-[30px]">
                    <CartIconButton />
                    <AvatarClient user={user}/>
                </div>
            ) : (
                <div className="h-[60px] flex items-center justify-end gap-[10px]">
                    <Button
                        onClick={() => router.visit("/register")}
                        variant="outlined"
                        sx={{ textTransform: "none" }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        onClick={() => router.visit("/login")}
                        variant="contained"
                        sx={{ textTransform: "none" }}
                    >
                        Sign In
                    </Button>
                </div>
            )}
        </header>
    );
};

export default ClientHeader;
