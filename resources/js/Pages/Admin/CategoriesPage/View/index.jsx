/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import General from "./General";
import { Button, CircularProgress } from "@mui/material";
import SideAddProduct from "./Side";
import { Head, Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ViewCategory() {
    const [tab, setTab] = useState("1");
    const { props } = usePage();
    const [category, setCategory] = useState(props.category);
    const [loading, setLoading] = useState(false);
    const getCategory = () => {};

    useEffect(() => {
        getCategory();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/categories/${category.id}`,category,{
          onSuccess:()=>{
            router.visit("/admin/categories")
          }
        })
    };
    return (
        <AdminLayout>
            <Head title="Update category" />
            <section className="header__top">
                <span className="header__top--header">View Category</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <Link to={"/category"} className="text-gray-1 font-[600]">
                        Category
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-black">View</span>
                </div>
            </section>
            <section className="w-full grid grid-cols-12 gap-[30px]">
                <SideAddProduct category={category} setCategory={setCategory} />
                <div className="col-span-9">
                    <div className="w-full">
                        <General
                            category={category}
                            setCategory={setCategory}
                        />
                    </div>
                    <div className="flex justify-end items-center mt-[20px]">
                        <Button
                            variant="contained"
                            sx={{
                                height: 40,
                                padding: "10px",
                                fontSize: 11,
                                fontWeight: 600,
                            }}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}
