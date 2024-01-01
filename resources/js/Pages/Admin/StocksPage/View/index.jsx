import { useEffect, useState } from "react";
import General from "./General";
import Advanced from "./Advanced";
import { Button, CircularProgress } from "@mui/material";
import SideAddProduct from "./Side";
import { Head, Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ViewProduct() {
  const [tab, setTab] = useState("1");
  const [loading, setLoading] = useState(false);
  const {props} = usePage()
  const [product, setProduct] = useState(props.product);

  const getProduct = () => {
    
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.put(`/stock/edit/${product.id}`,product,{
      onSuccess: ()=>{
        router.visit("/admin/stock")
      }
    })
  };
  return (
    <AdminLayout>
      <Head title="Update Product"/>
      <section className="header__top">
        <span className="header__top--header">Add Product</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/dashboard"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <Link to={"/stock"} className="text-gray-1 font-[600]">
            Stock
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-black">Add</span>
        </div>
      </section>
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <section className="w-full grid grid-cols-12 gap-[30px]">
          <SideAddProduct product={product} setProduct={setProduct} />
          <div className="col-span-9">
            <div className="w-full h-[60px] flex text-default font-[600] gap-[20px]">
              <div
                className={`h-[40px] duration-100 flex-center hover:border-b-[3px] hover:border-primary text-black  cursor-pointer ${
                  tab === "1" && "border-b-[3px] border-primary text-primary"
                }`}
                onClick={() => setTab("1")}
              >
                General
              </div>
              <div
                className={`h-[40px] duration-100 flex-center hover:border-b-[3px] hover:border-primary text-black  cursor-pointer ${
                  tab === "2" && "border-b-[3px] border-primary text-primary"
                }`}
                onClick={() => setTab("2")}
              >
                Advanced
              </div>
            </div>
            {tab === "1" && (
              <div className="w-full">
                <General product={product} setProduct={setProduct} />
              </div>
            )}
            {tab === "2" && (
              <div className="w-full">
                <div className="w-full">
                  <Advanced product={product} setProduct={setProduct} />
                </div>
              </div>
            )}
            <div className="flex justify-end items-center mt-[20px]">
              <Button
                variant="contained"
                sx={{
                  height: 40,
                  padding: "10px",
                  fontSize: 11,
                  fontWeight: 600,
                }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </section>
      )}
    </AdminLayout>
  );
}
