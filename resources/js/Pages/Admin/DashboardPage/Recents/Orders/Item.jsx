/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatCurrency } from "@/Functions/FormatCurrency";

const Item = ({ products }) => {
    const [order, setOrder] = useState();

    const productTemplate = (item) => (
        <div className="flex gap-[5px] items-center">
            <img
                src={item?.thumbnail}
                alt=""
                className="w-[50px] h-[50px] rounded-md"
            />
            <span>{item?.name}</span>
        </div>
    );

    const priceTemplate = (item) => (
        <div>
            <span>{formatCurrency(item?.price.base_price - 0)}</span>
        </div>
    );

    return (
        <div className="w-full h-[200px]">
            <DataTable value={products} scrollable scrollHeight="280px">
                <Column
                    field="name"
                    header="Product"
                    sortable
                    body={productTemplate}
                />
                <Column field="stock.quantity" header="Quantity" sortable body={(item)=>"x"+item.stock.quantity}/>
                <Column
                    field="price.base_price"
                    header="Price"
                    sortable
                    body={(item) => formatCurrency(item.price.base_price - 0)}
                />
            </DataTable>
        </div>
    );
};

export default Item;
