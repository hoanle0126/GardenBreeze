import { useStateContext } from "@/Contexts/ApiContext";
import { primary, secondary } from "@/Contexts/ColorContext";
import ClientLayout from "@/Layouts/ClientLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Delete } from "@mui/icons-material";
import { Button, IconButton, alpha } from "@mui/material";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import BackIcon from "resources/assets/icons/back";

function CartPage() {
    const { props } = usePage();
    console.log(props);
    const products = props.auth.user.cart.product;
    const { selectedProducts, setSelectedProducts } = useStateContext();
    const productBody = (item) => (
        <div className="flex items-center gap-[10px]">
            <img
                src={item.thumbnail}
                alt={item.name}
                className="w-[60px] h-[60px] border border-gray-50"
            />
            <span className="text-[21px]">{item.name}</span>
        </div>
    );

    const quantityBody = (item) => (
        <>
            x <span className="text-black ">{item.pivot?.quantity}</span>
        </>
    );

    const priceBody = (item) => (
        <div className="flex items-center gap-[10px]">
            <span className="line-through text-gray-400">
                $<span>{item.price.base_price}</span>
            </span>
            <span>
                $
                <span className="text-black">
                    {item.price.base_price -
                        (-item.price.base_price * item.price.sales) / 100}
                </span>
            </span>
        </div>
    );

    const totalBody = (item) => (
        <>
            ${" "}
            <span className="text-black">
                {item.pivot.quantity * item.price.base_price -
                    (-item.price.base_price * item.price.sales) / 100}
            </span>
        </>
    );

    const actionBody = (item) => (
        <IconButton onClick={() => router.post(`/cart-delete/${item.id}`)}>
            <Delete />
        </IconButton>
    );
    return (
        <ClientLayout className="flex-col px-[120px] mt-[30px]">
            <Head title="Cart" />
            <section className="w-full shadow-md p-[20px] card flex flex-col gap-[20px] mb-[30px]">
                <div className="text-[28px] font-[600] flex items-center gap-[5px]">
                    <Link href="/">
                        <BackIcon
                            size={50}
                            primary={alpha(primary, 0.5)}
                            secondary={alpha(secondary, 0.9)}
                            tertiary={alpha(primary, 0.9)}
                        />
                    </Link>
                    <span>Cart</span>
                </div>
                <DataTable
                    value={products}
                    paginator
                    selectionMode={"checkbox"}
                    selection={selectedProducts?.products}
                    onSelectionChange={(e) =>
                        setSelectedProducts({ products: e.value })
                    }
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                    ></Column>
                    <Column
                        field="name"
                        header="Name"
                        body={productBody}
                    ></Column>
                    <Column
                        field="price"
                        header="Price"
                        style={{ width: "200px" }}
                        body={priceBody}
                    ></Column>
                    <Column
                        field="pivot?.quantity"
                        header="Quantity"
                        style={{ width: "200px" }}
                        body={quantityBody}
                    ></Column>
                    <Column
                        field="price"
                        header="Total"
                        style={{ width: "200px" }}
                        body={totalBody}
                    ></Column>
                    <Column style={{ width: "0px" }} body={actionBody}></Column>
                </DataTable>
            </section>
            <section className="w-full justify-end flex">
                <Button
                    variant={"contained"}
                    onClick={() => router.visit("/payment")}
                >
                    Buy
                </Button>
            </section>
        </ClientLayout>
    );
}

export default CartPage;
