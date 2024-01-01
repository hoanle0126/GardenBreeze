/* eslint-disable react/prop-types */
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { formatCurrency } from "@/Functions/FormatCurrency";
import { router, usePage } from "@inertiajs/react";

const PendingOrder = () => {
  const {props} = usePage()
  const orders = props.orders
  const orderTable = (item) => (
    <div className="w-full">
      <span className="w-full h-[40px] flex items-center border-b-[2px] border-b-primary/70 pl-[10px] text-primary/70">
        #{item.id}
      </span>
      <div className="flex flex-col">
        {item.products?.map((product) => (
          <div
            key={product.id}
            className="flex h-[100px] items-center pl-[5px] justify-between border-b border-dashed"
          >
            <div className="flex gap-[10px]">
              <img
                src={product.thumbnail}
                alt=""
                className="w-[90px] h-[90px]"
              />
              <div className="h-[90px] flex flex-col justify-between">
                <span className="text-[28px]">{product.name}</span>
                <span>x{product.pivot.quantity}</span>
              </div>
            </div>
            <div className="h-full flex items-center text-[21px] gap-[10px]">
              {product.price.sales > 0 && (
                <span className="text-gray-400 line-through">
                  {formatCurrency(product.price.base_price - 0)}
                </span>
              )}
              <span className="text-red/70">
                {formatCurrency(
                  product.price.base_price -
                    (product.price.base_price * product.price.sales) / 100
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="py-[10px] flex items-center justify-end">
        <div>
          <IconButton onClick={()=>router.delete(`/order/${item.id}`)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <DataTable
        value={orders.filter(o=>o.status==="Pending")}
        tableStyle={{ minWidth: "50rem", marginTop: "-40px" }}
      >
        <Column field="id" body={orderTable}></Column>
      </DataTable>
    </div>
  );
};

export default PendingOrder;
