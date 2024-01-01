import AdminLayout from "@/Layouts/AdminLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import RevenueCard from "./Overview/RevenueCard";
import AverageSaleCard from "./Overview/AverageSaleCard";
import OrdersCard from "./Overview/OrdersCard";
import NewCustomesCard from "./Overview/NewCustomesCard";
import RightCard from "./Overview/RightCard";
import RecentsCard from "./Recents/RecentsCard";
import DiscountedProductSales from "./Recents/DiscountedProductSales";
import ProductsDelivery from "./Products/ProductsDelivery";
import StockReportCard from "./StockReport/StockReportCard";

export default function Dashboard({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />
            <section className="header__top">
                <span className="header__top--header">Dashboard</span>
                <div className="header__top--breadcrumbs">
                    <Link href="/admin/dashboard">Home</Link>
                    <span>/</span>
                    <span>Dashboard</span>
                </div>
            </section>
            <section className="dashboard__overview">
                <div className="dashboard__overview--left">
                    <RevenueCard />
                    <AverageSaleCard />
                    <OrdersCard />
                    <NewCustomesCard />
                </div>
                <RightCard />
            </section>
            <section className="w-full grid grid-cols-12 gap-[30px]">
                <RecentsCard />
                <DiscountedProductSales />
                <ProductsDelivery/>
                <StockReportCard/>
            </section>
        </AdminLayout>
    );
}
