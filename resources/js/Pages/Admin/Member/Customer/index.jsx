import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import {
    Avatar,
    CircularProgress,
    IconButton,
    Menu,
    MenuItem,
    alpha,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import SearchIcon from "icons/search";
import ThreeDotIcon from "icons/ThreeDot";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Lock, RemoveRedEye } from "@mui/icons-material";
import { primary, secondary } from "@/Contexts/ColorContext";
import { Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function CustomerPage() {
    const { props } = usePage();
    const customers = props.customers;
    const [globalFilterValue, setGlobalFilterValue] = useState("");
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
            </div>
        );
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
                                    className="flex gap-[5px] items-center"
                                    onClick={() =>
                                        router.visit(
                                            `/admin/customer-${item.id}`
                                        )
                                    }
                                >
                                    <RemoveRedEye sx={{ fontSize: 18 }} />
                                    <span>View</span>
                                </MenuItem>
                                <MenuItem
                                    onClick={popupState.close}
                                    className="flex gap-[5px] items-center"
                                >
                                    <Lock sx={{ fontSize: 18 }} />
                                    <span>Ban</span>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </>
        );
    };

    const customerTemplate = (item) => {
        return (
            <div className="h-[40px] flex gap-[20px] items-center">
                <Avatar
                    src={item.avatar}
                    alt={item.name}
                    className="w-[40px] h-[40px] rounded-md"
                />
                <span>{item.name}</span>
            </div>
        );
    };

    return (
        <AdminLayout>
            <section className="header__top">
                <span className="header__top--header">Customer</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Customer</span>
                </div>
            </section>
            <section className="w-full p-[20px] card">
                <DataTable
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    header={header}
                    value={customers.filter((c) => c.role === "Client")}
                    selectionMode={"checkbox"}
                    emptyMessage="No products found."
                    tableStyle={{ minWidth: "50rem" }}
                    globalFilterFields={["name"]}
                    filters={filters}
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                    ></Column>
                    <Column
                        sortable
                        field="product.name"
                        header="Customer"
                        body={customerTemplate}
                    ></Column>
                    <Column sortable field="email" header="Email"></Column>
                    <Column
                        sortable
                        field="address"
                        header="Address"
                        style={{ maxWidth: 200 }}
                    ></Column>
                    <Column
                        sortable
                        field="created_at"
                        header="Join Date"
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

export default CustomerPage;
