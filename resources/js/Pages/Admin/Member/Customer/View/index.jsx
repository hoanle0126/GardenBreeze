import { useEffect, useState } from "react";
import { Avatar, CircularProgress } from "@mui/material";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function ViewCustomer() {
  const {props} = usePage();
  const customer = props.customer

    return (
        <AdminLayout>
            <Head title="View customer" />
            <section className="header__top">
                <span className="header__top--header">Customer details</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <Link to={"/customer"} className=" font-[600] text-gray-1">
                        Customer
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Customer</span>
                </div>
            </section>
            <section className="flex h-[550px] gap-[40px]">
                <div className="w-[330px] h-full bg-white shadow border rounded-lg flex flex-col items-center pt-[60px] gap-[15px]">
                    <Avatar
                        src={customer?.avatar}
                        sx={{ width: 160, height: 160 }}
                    />
                    <div className="flex flex-col items-center">
                        <span className="text-[21px] font-[600]">
                            {customer?.name}
                        </span>
                        <span className="text-[14px] text-gray-500">
                            {customer?.email}
                        </span>
                    </div>
                    <div className="w-full flex-1 mt-[30px] px-[20px] flex flex-col">
                        <div className="w-full h-[40px] border-b border-dashed flex justify-between items-center">
                            <span className="font-[600]">Details</span>
                        </div>
                        <div className="flex-1 w-full flex flex-col gap-[20px] pt-[20px]">
                            <div className="flex flex-col ">
                                <span className="font-[600]">Address</span>
                                <span className="text-gray-500">
                                    {customer.address?customer.address:"None"}
                                </span>
                            </div>
                            <div className="flex flex-col ">
                                <span className="font-[600]">
                                    Contact phone
                                </span>
                                <span className="text-gray-500">
                                    {customer.phone?customer.phone:"None"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-[30px]">
                    <div className="w-full h-[180px] flex gap-[30px]">
                        <div className="bg-white flex-1 border shadow rounded-lg"></div>
                        <div className="bg-white flex-1 border shadow rounded-lg"></div>
                    </div>
                    <div className="w-full flex-1 bg-white border shadow rounded-lg"></div>
                </div>
            </section>
        </AdminLayout>
    );
}

export default ViewCustomer;
