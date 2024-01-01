import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Avatar, Button, CircularProgress, IconButton } from "@mui/material";
import TickIcon from "icons/tick";
import { Head, Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { formatCurrency } from "@/Functions/FormatCurrency";

function OrderPage() {
    const { props } = usePage();
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);

    const collapseAll = () => {
        setExpandedRows(null);
    };

    const allowExpansion = (rowData) => {
        return rowData.products?.length > 0;
    };

    const header = (
        <div className="flex justify-between items-center">
            <Button onClick={collapseAll} variant="contained">
                Collapse All
            </Button>
        </div>
    );

    const userTemplate = (item) => (
        <div className="flex items-center gap-[10px]">
            <Avatar src={item.user?.avatar} sx={{ width: 40, height: 40 }} />
            <span>{item.user?.name}</span>
        </div>
    );

    const productTemplate = (item) => (
        <div className="flex items-center gap-[10px]">
            <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="w-[40px] h-[40px] rounded-md"
            />
            <span>{item.name}</span>
        </div>
    );

    const amountTemplate = (item) => (
        <div className="flex items-center gap-[5px]">
            <span>x</span>
            <span>{item.pivot?.quantity}</span>
        </div>
    );

    const priceTemplate = (item) => (
        <span>{formatCurrency(item.price?.base_price - 0)}</span>
    );

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Products in order</h5>
                <DataTable value={data.products}>
                    <Column
                        field="name"
                        header="Product"
                        sortable
                        body={productTemplate}
                    ></Column>
                    <Column
                        field="amount"
                        header="Amount"
                        sortable
                        body={amountTemplate}
                    ></Column>
                    <Column
                        field="price?.base_price"
                        header="Price"
                        sortable
                        body={priceTemplate}
                    ></Column>
                </DataTable>
            </div>
        );
    };

    const actionTemplate = (item) => (
        <div className="flex items-center justify-center">
            {item.status === "Pending" ? (
                <Button
                    variant="contained"
                    onClick={() => router.put(`/admin/order-${item.id}`)}
                >
                    Submit
                </Button>
            ) : (
                <IconButton>
                    <TickIcon size={24} primary={"#333"} />
                </IconButton>
            )}
        </div>
    );

    const statusBody = (item) => {
        return (
            <>
                {item.status === "Pending" && (
                    <span className="badge badge__pending">{item.status}</span>
                )}
                {item.status === "Refund" && (
                    <span className="badge badge__refund">{item.status}</span>
                )}
                {item.status === "Cancelled" && (
                    <span className="badge badge__cancelled">
                        {item.status}
                    </span>
                )}
                {item.status === "Completed" && (
                    <span className="badge badge__completed">
                        {item.status}
                    </span>
                )}
                {item.status === "Delivering" && (
                    <span className="badge badge__delivering">
                        {item.status}
                    </span>
                )}
            </>
        );
    };

    const totalPriceBody = (item) => <div>{formatCurrency(item.total)}</div>;

    return (
        <AdminLayout>
            <Head title="Order" />
            <section className="header__top">
                <span className="header__top--header">Order</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Order</span>
                </div>
            </section>
            <section className="w-full p-[20px] card">
                <Toast ref={toast} />
                <DataTable
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    value={props.orders}
                    expandedRows={expandedRows}
                    onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate}
                    dataKey="id"
                    header={header}
                    tableStyle={{ minWidth: "60rem" }}
                >
                    <Column
                        expander={allowExpansion}
                        style={{ width: "5rem" }}
                    />
                    <Column
                        field="id"
                        header="Id"
                        sortable
                        style={{ width: 0, paddingRight: "50px" }}
                    />
                    <Column
                        field="user?.name"
                        header="User"
                        sortable
                        body={userTemplate}
                    />
                    <Column
                        field="status"
                        header="Status"
                        style={{
                            textAlign: "end",
                            width: 0,
                            paddingLeft: "50px",
                        }}
                        body={statusBody}
                    />
                    <Column
                        field="total"
                        header="Price"
                        sortable
                        style={{
                            textAlign: "end",
                            width: 0,
                            paddingLeft: "50px",
                        }}
                        body={totalPriceBody}
                    />
                    <Column
                        field="date_added"
                        header="Created date"
                        sortable
                        style={{ textAlign: "end", width: 180 }}
                    />
                    <Column
                        field="user.address"
                        header="Address"
                        sortable
                        style={{ textAlign: "end", maxWidth: 200 }}
                    />
                    <Column
                        style={{ textAlign: "center", width: 0 }}
                        body={actionTemplate}
                    />
                </DataTable>
            </section>
        </AdminLayout>
    );
}

export default OrderPage;
