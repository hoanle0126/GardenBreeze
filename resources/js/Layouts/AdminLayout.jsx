import Footer from "@/Components/Footer/Footer";
import AdminHeader from "@/Components/Header/AdminHeader";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function AdminLayout({ children, className, user }) {
    const [side, setSide] = useState(true);
    return (
        <>
            <AdminHeader side={side} setSide={setSide} />
            <AdminSidebar side={side} />
            <main
                className={`absolute top-[60px] duration-300 py-[30px] px-[60px] flex flex-col gap-[30px] ${
                    side ? "left-[270px] w-[calc(100%-270px)]" : "left-0 w-full"
                }`}
            >
                {children}
            </main>
        </>
    );
}

export default AdminLayout;
