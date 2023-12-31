import AdminLayout from "@/Layouts/AdminLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import RevenueCard from "./Overview/RevenueCard";
import AverageSaleCard from "./Overview/AverageSaleCard";
import OrdersCard from "./Overview/OrdersCard";
import NewCustomesCard from "./Overview/NewCustomesCard";
import RightCard from "./Overview/RightCard";

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
        </AdminLayout>
    );
}
