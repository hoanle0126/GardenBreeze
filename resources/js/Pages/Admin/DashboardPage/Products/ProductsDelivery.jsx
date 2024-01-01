import { formatCurrency } from "@/Functions/FormatCurrency";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const ProductsDelivery = () => {
    const { props } = usePage();
    const orders = props.countOrder;

    const getOrders = () => {};

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="h-[450px] card md:col-span-4 col-span-12 p-[20px] font-[600] flex flex-col gap-[20px]">
            <div className=" text-sm text-dark">Orders Report</div>
            <div className=" text-default text-gray-1 mt-[-25px]">
                {orders.length} Orders
            </div>
            <div className="w-full flex-1 flex flex-col gap-[20px] overflow-y-auto hide--scroll">
                {orders.map((order) => (
                    <div className="w-full flex flex-col gap-[20px]">
                        {order.products.map((product) => (
                            <div
                                key={product.id}
                                className="w-full h-[70px] border border-dashed border-gray-1 rounded-xl"
                            >
                                <div className="w-full h-[70px] pl-[5px] flex items-center gap-[10px]">
                                    <img
                                        src={product.thumbnail}
                                        alt=""
                                        className="h-[60px] w-[60px] rounded-lg"
                                    />
                                    <div className="h-full flex-1 line-clamp-1 p-[10px] flex flex-col justify-between">
                                        <span>{product.name}</span>
                                        <div className="text-gray-500">
                                          {formatCurrency(product.price.base_price-0)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsDelivery;
