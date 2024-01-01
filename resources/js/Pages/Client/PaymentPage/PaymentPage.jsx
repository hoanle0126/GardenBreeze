import { useStateContext } from "@/Contexts/ApiContext";
import { primary, secondary } from "@/Contexts/ColorContext";
import { formatCurrency } from "@/Functions/FormatCurrency";
import ClientLayout from "@/Layouts/ClientLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Button, Modal, alpha } from "@mui/material";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { DataTable } from "primereact/datatable";
import { Row } from "primereact/row";
import { useState } from "react";
import BackIcon from "resources/assets/icons/back";
import TickIcon from "resources/assets/icons/tick";

function PaymentPage({ auth }) {
    const { selectedProducts, setSelectedProducts } = useStateContext();
    const [changeAddress, setChangeAddress] = useState(false);
    const [open, setOpen] = useState(false);

    const purchase = () => {
        router.post(route("order.store"),selectedProducts,{
            onSuccess:()=>{
                router.visit("/")
            }
        })
        console.log(selectedProducts)
    };

    const sumTotal = () => {
        let total = 0;

        for (let product of selectedProducts.products) {
            total -= -(product.price.base_price * product.pivot.quantity);
        }

        return formatCurrency(total);
    };
    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column
                    footer="Totals:"
                    colSpan={3}
                    footerStyle={{ textAlign: "right" }}
                />
                <Column footer={sumTotal} />
            </Row>
        </ColumnGroup>
    );

    const productBody = (item) => (
        <div className="flex items-center gap-[10px]">
            <img src={item.thumbnail} className="w-[60px] h-[60px] " />
            <span className="text-[21px]">{item.name}</span>
        </div>
    );

    const priceBody = (item) => (
        <div className="flex items-center gap-[10px]">
            <span>{formatCurrency(item.price?.base_price - 0)}</span>
        </div>
    );

    return (
        <ClientLayout className="px-[120px] mt-[30px]">
            <Head title="Payment" />
            <section className="w-full shadow-md p-[20px] card flex flex-col gap-[40px] mb-[30px]">
                <div className="text-[28px] font-[600] flex items-center gap-[5px]">
                    <Link href="/cart">
                        <BackIcon
                            size={50}
                            primary={alpha(primary, 0.5)}
                            secondary={alpha(secondary, 0.9)}
                            tertiary={alpha(primary, 0.9)}
                        />
                    </Link>
                    <span>Payment</span>
                </div>
                <div className="w-full flex items-center gap-[10px] justify-between">
                    <span className="flex gap-[30px] items-center h-[40px]">
                        <span className="text-[21px]">Address:</span>
                        <span className="text-[21px] text-gray-500">
                            {auth.user?.address}
                        </span>
                    </span>
                    <Button
                        variant={"contained"}
                        onClick={() => setChangeAddress(!changeAddress)}
                    >
                        Change
                    </Button>
                </div>
                <div className="w-full flex gap-[10px] flex-col">
                    <span className="flex gap-[30px] items-center">
                        <span className="text-[21px]">Products</span>
                    </span>
                    <DataTable
                        scrollable
                        scrollHeight="400px"
                        footerColumnGroup={footerGroup}
                        value={selectedProducts.products}
                        tableStyle={{ minWidth: "50rem" }}
                    >
                        <Column
                            field="code"
                            header="Product"
                            style={{ border: "none" }}
                            body={productBody}
                        ></Column>
                        <Column
                            field="price?.base_price"
                            header="Price"
                            style={{ border: "none" }}
                            body={priceBody}
                        ></Column>
                        <Column
                            field="pivot.quantity"
                            header="Quantity"
                            style={{ border: "none" }}
                        ></Column>
                        <Column
                            field="pivot.quantity"
                            header="Total Price"
                            style={{ border: "none" }}
                            body={(item) => (
                                <>
                                    {formatCurrency(
                                        item.pivot.quantity *
                                            item.price.base_price
                                    )}
                                </>
                            )}
                        ></Column>
                    </DataTable>
                </div>
                <div className="w-full flex gap-[10px] justify-end">
                    <Button variant={"contained"} onClick={purchase}>
                        Purchase
                    </Button>
                </div>
            </section>
            <Modal
                open={open}
                onClose={() => navigate("/")}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                slotProps={{
                    backdrop: { style: { opacity: 0 } },
                }}
            >
                <div className="w-[400px] h-[250px] bg-black/80 absolute-center flex-center flex-col rounded-xl">
                    <TickIcon size={120} primary={alpha(primary, 0.8)} />
                    <span className="text-white/80 text-[32px]">Purchase</span>
                    <Button variant="contained" onClick={() => navigate("/")}>
                        Back to home
                    </Button>
                </div>
            </Modal>
        </ClientLayout>
    );
}

export default PaymentPage;
