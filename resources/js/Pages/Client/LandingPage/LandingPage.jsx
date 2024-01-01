import ClientLayout from "@/Layouts/ClientLayout";
import { Head } from "@inertiajs/react";
import StartSection from "./StartSection";
import ServiceSection from "./ServiceSection";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";
import { useState } from "react";

function LandingPage({ categories, products, auth }) {
    
    return (
        <ClientLayout
            className="-mt-[60px] px-[120px] flex-col gap-[90px]"
            user={auth.user}
        >
            <Head title="Welcome to Garden" />
            <StartSection />
            <ServiceSection />
            <CategoriesSection categories={categories} />
            <ProductsSection products={products} />
        </ClientLayout>
    );
}

export default LandingPage;
