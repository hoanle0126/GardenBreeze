import ClientLayout from "@/Layouts/ClientLayout";
import { Head, router } from "@inertiajs/react";
import ShopSideBar from "./ShopSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress, Pagination, Rating } from "@mui/material";
import { formatCurrency } from "@/Functions/FormatCurrency";
import SortComponent from "./SortComponent/SortComponent";

function ShopPage({ categories }) {
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        sort: "Lastest",
        _categories: [],
        ratings: [],
        price: [0, 50],
    });
    const [products, setProducts] = useState();
    const [page, setPage] = useState({
        current_page: 1,
        from: 1,
        last_page: 1,
    });
    const getProducts = () => {
        setLoading(true);
        axios
            .post(`/api/products/list?page=${page.current_page}`, filter)
            .then((data) => {
                setProducts(data.data.data);
                setPage(data.data.meta);
                setLoading(false);
            });
    };
    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
    }, [filter, page.current_page]);
    return (
        <ClientLayout>
            <Head title="Shop" />
            <ShopSideBar
                filter={filter}
                setFilter={setFilter}
                categories={categories}
            />
            <main className="flex-1 border-l">
                <SortComponent filter={filter} setFilter={setFilter}/>
                {loading ? (
                    <div className="h-[120px] flex items-center justify-center">
                        <CircularProgress />
                    </div>
                ) : (
                    <section className="w-full max-h-[1200px] grid grid-cols-3 gap-[60px]  overflow-hidden pl-[60px] pr-[120px] py-[30px] ">
                        {products?.map((product) => (
                            <div
                                key={product.id}
                                className="border rounded-2xl h-[350px] flex flex-col items-center p-[20px]"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.thumbnail}
                                    className="w-[220px] h-[180px]"
                                />
                                <div className="flex flex-col items-start w-full pt-[10px] justify-between flex-1">
                                    <div>
                                        <span className="text-[21px] font-[600] text-green-main-dark line-clamp-1">
                                            {product.name}
                                        </span>
                                        <span className="flex items-center gap-[5px]">
                                            <Rating
                                                value={product.avg_rating}
                                                readOnly
                                            />
                                            ({product.review?.length})
                                        </span>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <span className="text-[24px] text-green-main-dark">
                                            {formatCurrency(
                                                product.price?.base_price - 0
                                            )}
                                        </span>
                                        <Button
                                            variant={"outlined"}
                                            onClick={() => {
                                                router.visit(
                                                    `/shop/${product.id}`
                                                );
                                            }}
                                        >
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
                {page.last_page !== 1 && (
                    <section className="w-full h-[60px] flex items-center pr-[120px] justify-end pt-[60px] pb-[120px]">
                        <Pagination
                            count={page.last_page}
                            page={page.current_page}
                            onChange={(e, value) =>
                                setPage({ ...page, current_page: value })
                            }
                            shape="rounded"
                            color="primary"
                        />
                    </section>
                )}
            </main>
        </ClientLayout>
    );
}

export default ShopPage;
