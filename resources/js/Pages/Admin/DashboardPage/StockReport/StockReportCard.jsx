import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/Functions/FormatCurrency";
import { usePage } from "@inertiajs/react";

const StockReportCard = () => {
  const {props} = usePage()
  const stock = props.stocks

  const statusBody = (item) => {
    return (
      <div className="flex">
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

  const priceBody = (item) => (
    <span>{formatCurrency(item.product.price?.base_price - 0)}</span>
  );

  const productBody = (item) => (
    <div className="flex items-center gap-[5px]">
      <img src={item.product.thumbnail} alt="" className="w-[40px] h-[40px]"/>
      <span>{item.product.name}</span>
    </div>
  );

  return (
    <div className="card md:col-span-8 col-span-12 p-[20px] font-[600] flex flex-col gap-[20px]">
      <div className=" text-sm text-dark">Stock Report</div>
      <div className=" text-default text-gray-1 mt-[-25px]">
        Total {stock?.length} Items in the Stock
      </div>
      <DataTable value={stock} paginator rows={3}>
        <Column field="product.name" header="PRODUCT" body={productBody} />
        <Column
          field="product.price.base_price"
          header="PRICE"
          body={priceBody}
        />
        <Column field="status" header="STATUS" body={statusBody} />
        <Column field="quantity" header="QTY" />
      </DataTable>
    </div>
  );
};

export default StockReportCard;
