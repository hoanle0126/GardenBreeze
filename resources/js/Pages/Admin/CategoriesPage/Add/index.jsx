import { useState } from "react";
import General from "./General";
import { Button } from "@mui/material";
import SideAddProduct from "./Side";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function NewCategory() {
    const [tab, setTab] = useState("1");
    const [category, setCategory] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("categories.store"), category, {
            onSuccess: () => {
                router.visit("/admin/categories");
            },
        });
    };
    return (
        <AdminLayout>
            <Head title="Add Category" />
            <section className="header__top">
                <span className="header__top--header">New Category</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <Link to={"/category"} className="text-gray-1 font-[600]">
                        Category
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-black">New</span>
                </div>
            </section>
            <section className="w-full grid grid-cols-12 gap-[30px]">
                <SideAddProduct category={category} setCategory={setCategory} />
                <div className="col-span-9">
                    <div className="w-full h-[60px] flex text-default font-[600] gap-[20px]">
                        <div
                            className={`h-[40px] duration-100 flex-center hover:border-b-[3px] hover:border-primary text-black  cursor-pointer ${
                                tab === "1" &&
                                "border-b-[3px] border-primary text-primary"
                            }`}
                            onClick={() => setTab("1")}
                        >
                            General
                        </div>
                    </div>
                    {tab === "1" && (
                        <div className="w-full">
                            <General
                                category={category}
                                setCategory={setCategory}
                            />
                        </div>
                    )}
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
