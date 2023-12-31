import { primary, secondary } from "@/Contexts/ColorContext";
import { formatCurrency } from "@/Functions/FormatCurrency";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { Button, IconButton, Menu, MenuItem, Rating, alpha } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import ThreeDotIcon from "resources/assets/icons/ThreeDot";
import SearchIcon from "resources/assets/icons/search";

function StockPage({ stocks }) {
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const header = () => {
        return (
            <div className="h-[40px] w-full flex justify-between items-center">
                <div className="w-[300px] h-[40px] relative">
                    <span className="absolute w-[40px] h-[40px] flex items-center justify-center">
                        <SearchIcon
                            primary={alpha(primary, 0.7)}
                            secondary={alpha(secondary, 0.7)}
                            size={25}
                        />
                    </span>
                    <input
                        type="text"
                        value={globalFilterValue}
                        className="bg-[#ececec]/70 w-[300px] h-full outline-none rounded-md pl-[40px] pr-[10px]"
                        onChange={onGlobalFilterChange}
                        placeholder="Search"
                    />
                </div>
                <div className="flex items-center gap-[20px]">
                    {selectedProducts.length > 0 && (
                        <Button
                            variant={"outlined"}
                            onClick={() => console.log(selectedProducts)}
                        >
                            Delete All Selected
                        </Button>
                    )}
                    <Button variant={"contained"} to={"/stock/add"}>
                        Add Product
                    </Button>
                </div>
            </div>
        );
    };

    const deleteProduct = (id) => {
        axiosClient.delete(`/products/${id}`).then(() => {
            getProducts();
        });
    };

    const actionTemplate = (item) => {
        return (
            <>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <IconButton
                                color="primary"
                                {...bindTrigger(popupState)}
                            >
                                <ThreeDotIcon size={18} primary={"#6C6C6C"} />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem
                                    onClick={() =>
                                        navigate(
                                            `/stock/view/${item.product?.id}`
                                        )
                                    }
                                >
                                    View
                                </MenuItem>
                                <MenuItem
                                    onClick={() =>
                                        deleteProduct(item.product?.id)
                                    }
                                >
                                    Delete
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </>
        );
    };

    const ratingTemplate = (item) => {
        return (
            <div>
                <Rating
                    value={item.product?.avg_rating}
                    readOnly
                    precision={0.1}
                    size="small"
                />
            </div>
        );
    };

    const statusTemplate = (item) => {
        return (
            <div className="flex justify-end">
                {item.status === "On Stock" && (
                    <div className="badge badge__stock">On Stock</div>
                )}
                {item.status === "Low Stock" && (
                    <div className="badge badge__lowStock">Low Stock</div>
                )}
                {item.status === "Out of Stock" && (
                    <div className="badge badge__outStock">Out of Stock</div>
                )}
            </div>
        );
    };

    const productTemplate = (item) => {
        return (
            <div className="h-[40px] flex gap-[20px] items-center">
                <img
                    src={item.product.thumbnail}
                    alt={item.product.name}
                    className="w-[40px] h-[40px] rounded-md"
                />
                <span>{item.product.name}</span>
            </div>
        );
    };

    const priceTemplate = (item) => (
        <div>{formatCurrency(item?.product.price.base_price - 0)}</div>
    );
    return (
        <AdminLayout>
            <Head title="Stock" />
            <section className="header__top">
                <span className="header__top--header">Stock</span>
                <div className="header__top--breadcrumbs">
                    <Link href="/admin/dashboard">Home</Link>
                    <span>/</span>
                    <span>Stock</span>
                </div>
            </section>
            <section className="w-full p-[20px] card">
                <DataTable
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    header={header}
                    value={stocks}
                    selectionMode={"checkbox"}
                    selection={selectedProducts}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    emptyMessage="No products found."
                    tableStyle={{ minWidth: "50rem" }}
                    globalFilterFields={[
                        "product.name",
                        "product.id",
                        "quantity",
                        "product.price.base_price",
                    ]}
                    filters={filters}
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                    ></Column>
                    <Column
                        sortable
                        field="product.name"
                        header="Product"
                        body={productTemplate}
                    ></Column>
                    <Column
                        sortable
                        field="product.id"
                        header="Id"
                        style={{
                            minWidth: 0,
                            textAlign: "end",
                            paddingLeft: 60,
                        }}
                    ></Column>
                    <Column
                        sortable
                        field="quantity"
                        header="Qty"
                        style={{
                            minWidth: 0,
                            textAlign: "end",
                            paddingLeft: 60,
                        }}
                    ></Column>
                    <Column
                        sortable
                        field="product.price.base_price"
                        header="Price"
                        style={{
                            minWidth: 0,
                            textAlign: "end",
                            paddingLeft: 60,
                        }}
                        body={priceTemplate}
                    ></Column>
                    <Column
                        sortable
                        field="quantity"
                        header="Rating"
                        body={ratingTemplate}
                        style={{
                            minWidth: 0,
                            paddingLeft: 60,
                            textAlign: "end",
                        }}
                    ></Column>
                    <Column
                        sortable
                        field="quantity"
                        header="Status"
                        style={{ minWidth: 150 }}
                        body={statusTemplate}
                    ></Column>
                    <Column
                        field="id"
                        body={actionTemplate}
                        style={{ width: 0, textAlign: "center" }}
                    ></Column>
                </DataTable>
            </section>
        </AdminLayout>
    );
}

export default StockPage;
