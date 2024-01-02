/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HouseIcon from "icons/house";
import PeopleIcon from "icons/people";
import ProductIcon from "icons/product";
import DropDownIcon from "icons/dropdown";
import PersonIcon from "icons/person";
import ProductItemIcon from "icons/ProductItem";
import { alpha } from "@mui/material";
import CalendarIcon from "icons/calendar";
import { Link, usePage } from "@inertiajs/react";
import { primary } from "@/Contexts/ColorContext";

/* eslint-disable react/prop-types */
const AdminSidebar = ({ side }) => {
    const [active, setActive] = useState();
    const { url } = usePage();
    const sideData = [
        {
            id: 1,
            icon: HouseIcon,
            name: "Dashboard",
            to: "/admin/dashboard",
            active:
                active === 1 || url.startsWith("/admin/dashboard")
                    ? true
                    : false,
        },
        {
            id: 2,
            icon: ProductIcon,
            childrenIcon: ProductItemIcon,
            name: "Product",
            active:
                active === 2 ||
                url.startsWith("/admin/stock") ||
                url.startsWith("/admin/order") ||
                url.startsWith("/admin/categories")
                    ? true
                    : false,
            heightChild: "100px",
            children: [
                {
                    id: 1,
                    name: "Stock",
                    to: "/admin/stock",
                },
                {
                    id: 2,
                    name: "Order",
                    to: "/admin/order",
                },
                {
                    id: 3,
                    name: "Category",
                    to: "/admin/categories",
                },
            ],
        },
        {
            id: 3,
            icon: PeopleIcon,
            childrenIcon: PersonIcon,
            name: "Member",
            active:
                active === 3 ||
                url.startsWith("/admin/customer")
                    ? true
                    : false,
            to: "/admin/customer",
        },
        {
            id: 4,
            icon: CalendarIcon,
            name: "Calendar",
            to: "/admin/calendar",
            active:
                active === 4 || url.startsWith("/admin/calendar")
                    ? true
                    : false,
        },
    ];

    useEffect(() => {
        console.log(active);
    }, [active]);

    return (
        <aside
            className={`duration-300 h-[calc(100vh-60px)] fixed top-[60px] bg-white flex flex-col gap-[10px] shadow-md z-[500] ${
                side ? "w-[270px]" : "w-0"
            }`}
        >
            <div
                className={`absolute w-full flex flex-col duration-300 top-[20px] pr-[30px] gap-[20px] ${
                    side ? "left-[0px]" : "left-[-270px]"
                }`}
            >
                {sideData.map((data) => (
                    <div key={data.id}>
                        {data.to ? (
                            <Link
                                href={data.to}
                                className={`px-[30px] h-[45px] flex items-center gap-[10px] text-[21px] font-[600] rounded-r-full border duration-300 ${
                                    data.active
                                        ? "bg-gradient-to-r from-primary/60 to-primary border-transparent"
                                        : ""
                                }`}
                                onClick={() =>
                                    active !== data.id
                                        ? setActive(data.id)
                                        : setActive(0)
                                }
                            >
                                <data.icon
                                    size={30}
                                    primary={data.active ? "#fff" : "#333"}
                                    secondary={data.active ? "#fff" : "#333"}
                                />
                                <span
                                    className={`${
                                        data.active ? "text-white" : ""
                                    }`}
                                >
                                    {data.name}
                                </span>
                            </Link>
                        ) : (
                            <div
                                className={`px-[30px] h-[45px] flex items-center gap-[10px] text-[21px] font-[600] rounded-r-full border duration-300 cursor-pointer ${
                                    data.active
                                        ? "bg-gradient-to-r from-primary/60 to-primary border-transparent"
                                        : ""
                                }`}
                                onClick={() =>
                                    active !== data.id
                                        ? setActive(data.id)
                                        : setActive(0)
                                }
                            >
                                <data.icon
                                    size={30}
                                    primary={data.active ? "#fff" : "#333"}
                                    secondary={data.active ? "#fff" : "#333"}
                                />
                                <span
                                    className={`${
                                        data.active ? "text-white" : ""
                                    }`}
                                >
                                    {data.name}
                                </span>
                                {data.children && (
                                    <div
                                        className={`absolute right-[50px] duration-300 ${
                                            !data.active
                                                ? " -rotate-[180deg]"
                                                : "rotate-0"
                                        }`}
                                    >
                                        <DropDownIcon
                                            size={15}
                                            primary={
                                                data.active ? "#fff" : "#000"
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                        {data.children && (
                            <div
                                className={`duration-300 flex flex-col gap-[10px] pl-[50px] overflow-hidden ${
                                    data.active
                                        ? `h-[${data.heightChild}]`
                                        : "h-0"
                                }`}
                            >
                                {data.children.map((child) => (
                                    <Link
                                        key={child.id}
                                        href={child.to}
                                        className={`first:mt-[10px] flex items-center gap-[5px] ${
                                            url.startsWith(child.to)
                                                ? "text-primary/70"
                                                : "text-black"
                                        }`}
                                    >
                                        <data.childrenIcon
                                            size={15}
                                            primary={
                                                url.startsWith(child.to)
                                                    ? alpha(primary, 0.7)
                                                    : "#000"
                                            }
                                        />
                                        <span>{child.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default AdminSidebar;
