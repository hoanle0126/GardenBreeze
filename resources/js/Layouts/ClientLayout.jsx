import Footer from "@/Components/Footer/Footer";
import ClientHeader from "@/Components/Header/ClientHeader";
import { usePage } from "@inertiajs/react";

function ClientLayout({ children, className }) {
    const { props } = usePage();
    return (
        <>
            <>
                <ClientHeader user={props.auth.user} />
            </>
            <main className={`flex pb-[120px] pt-[60px] ${className}`}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default ClientLayout;
