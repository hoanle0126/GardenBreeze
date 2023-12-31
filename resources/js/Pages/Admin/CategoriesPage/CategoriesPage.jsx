import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import {
    Button,
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
import { Head, Link, usePage } from "@inertiajs/react";
import { primary, secondary } from "@/Contexts/ColorContext";
import AdminLayout from "@/Layouts/AdminLayout";

function CategoriesPage({ categories }) {
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [loading, setLoading] = useState(false);
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
                    <Button variant={"outlined"}>Upload</Button>
                    <Button variant={"contained"} to={"/category/add"}>
                        New Category
                    </Button>
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
                                <MenuItem>View</MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    Delete
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </>
        );
    };

    const categoryTemplate = (item) => {
        return (
            <div className="h-[40px] flex gap-[20px] items-center">
                <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-[40px] h-[40px] rounded-md"
                />
                <span>{item.name}</span>
            </div>
        );
    };

    return (
        <AdminLayout>
            <Head title="Categories" />
            <section className="header__top">
                <span className="header__top--header">Categories</span>
                <div className="header__top--breadcrumbs">
                    <Link to={"/dashboard"} className="text-gray-1 font-[600]">
                        Home
                    </Link>
                    <span className="text-gray-1 font-[600]">/</span>
                    <span className=" font-[600] text-dark">Categories</span>
                </div>
            </section>
            {loading ? (
                <center>
                    <CircularProgress />
                </center>
            ) : (
                <section className="w-full p-[20px] card">
                    <DataTable
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        header={header}
                        value={categories}
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
                            header="Category"
                            body={categoryTemplate}
                        ></Column>
                        <Column
                            field="id"
                            body={actionTemplate}
                            style={{ width: 0, textAlign: "center" }}
                        ></Column>
                    </DataTable>
                </section>
            )}
        </AdminLayout>
    );
}

export default CategoriesPage;
