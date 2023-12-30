import ClientLayout from "@/Layouts/ClientLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import ItemImage from "./ItemImage";
import ReviewProduct from "./ReviewProduct";
import DetailsProduct from "./DetailsProduct";
import AddCartNotification from "./AddCartNotification";
import { useState } from "react";
import TextInput from "@/Components/TextInput";
import axios from "axios";

const ShopProductPage = ({ product }) => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addCart = () => {
        router.post(
            `/cart/${product.id}`,
            {
                quantity: quantity,
            },
            {
                onSuccess: () => {
                    setOpen(true);
                    setTimeout(() => setOpen(false), 1500);
                },
            }
        );
    };

    return (
        <ClientLayout className="px-[120px] mt-[20px] flex-col">
            <Head title={product.name} />
            <section className="header__top">
                <span className="header__top--header">{product.name}</span>
                <div className="header__top--breadcrumbs">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>
            </section>
            <section className="py-[30px] w-full h-[560px] flex gap-[30px]">
                <ItemImage product={product} />
                <div className="flex-1 h-full flex flex-col w-full items-start">
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-[48px] font-[600]">
                            {product.name}
                        </span>
                        <span className="text-[32px] mb-[20px]">
                            ${product.price?.base_price}
                        </span>
                        <div className="h-[40px] flex gap-[10px]">
                            <TextInput
                                type="number"
                                className="w-[70px] h-[40px] border px-[10px] outline-none"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <Button variant={"contained"} onClick={addCart}>
                                Add Cart
                            </Button>
                            <AddCartNotification
                                open={open}
                                handleClose={() => setOpen(false)}
                            />
                        </div>
                    </div>
                    <DetailsProduct product={product} />
                </div>
            </section>
            <ReviewProduct product={product} />
        </ClientLayout>
    );
};

export default ShopProductPage;
