import ClientLayout from "@/Layouts/ClientLayout";
import { Head } from "@inertiajs/react";
import StartSection from "./StartSection";
import ServiceSection from "./ServiceSection";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";

function LandingPage({ categories, products, auth }) {
    Echo.join("chat")
        .here((user) => {
            console.log(user);
        })
        .joining((user) => {
            console.log(user, "joining");
        })
        .leaving((user) => {
            console.log(user, "leaving");
        });
    return (
        <ClientLayout className="-mt-[60px] px-[120px] flex-col gap-[90px]" user={auth.user}>
            <Head title="Welcome to Garden" />
            <StartSection />
            <ServiceSection />
            <CategoriesSection categories={categories} />
            <ProductsSection products={products} />
        </ClientLayout>
    );
}

export default LandingPage;
