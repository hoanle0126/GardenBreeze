import { useEffect, useState } from "react";
import { Avatar, CircularProgress } from "@mui/material";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { AccountCircle, Email, LocationOn } from "@mui/icons-material";

function ViewCustomer() {
    const { props } = usePage();
    const customer = props.customer;

    return (
        <AdminLayout>
            <Head title="View customer" />
            <section className="header__top">
                <span className="header__top--header">Customer details</span>
                <div className="header__top--breadcrumbs">
                    <Link href={"/admin/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <Link href={"/admin/customer"} className=" font-[600] text-gray-1">
                        Customer
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Customer</span>
                </div>
            </section>
            <section className="w-full card px-[20px] flex gap-[30px] flex-col">
                <div className="flex gap-[20px] py-[20px]">
                    <Avatar
                        src={customer.avatar}
                        variant="rounded"
                        sx={{ width: 150, height: 150 }}
                    />
                    <div className="flex flex-col justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <span className="text-[24px] font-[600]">
                                {customer.name}
                            </span>
                            <span className="text-[14px] text-gray-500 flex gap-[10px] items-center font-[600]">
                                <span className="flex items-center gap-[5px]">
                                    <AccountCircle sx={{ fontSize: 18 }} />
                                    <span>{customer.role}</span>
                                </span>
                                <span className="flex items-center gap-[5px]">
                                    <LocationOn sx={{ fontSize: 18 }} />
                                    {customer.address}
                                </span>
                                <span className="flex items-center gap-[5px]">
                                    <Email sx={{ fontSize: 18 }} />
                                    {customer.email}
                                </span>
                            </span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <div className="h-[50px] min-w-[100px] pl-[5px] pr-[15px] border rounded border-dashed flex flex-col justify-between"></div>
                        </div>
                    </div>
                </div>
                <div className="h-[40px] flex items-center gap-[20px]">
                    <span
                        className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer text-primary/70 border-primary/70`}
                    >
                        Overview
                    </span>
                </div>
            </section>
            <section className="w-full card">
                <div className="text-[18px] font-[600] px-[20px] py-[10px] border-b flex items-center justify-between">
                    <span>Profile Details</span>
                </div>
                <div className="p-[20px] flex flex-col gap-[20px]">
                    <div className="grid grid-cols-12">
                        <span className="col-span-4">Fullname</span>
                        <span className="col-span-7 font-[600]">
                            {props.auth.user.name}
                        </span>
                    </div>
                    <div className="grid grid-cols-12">
                        <span className="col-span-4">Email</span>
                        <span className="col-span-7 font-[600]">
                            {props.auth.user.email}
                        </span>
                    </div>
                    <div className="grid grid-cols-12">
                        <span className="col-span-4">Contact Phone</span>
                        <span className="col-span-7 font-[600]">
                            {props.auth.user.phone}
                        </span>
                    </div>
                    <div className="grid grid-cols-12">
                        <span className="col-span-4">Address</span>
                        <span className="col-span-7 font-[600]">
                            {props.auth.user.address}
                        </span>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}

export default ViewCustomer;
