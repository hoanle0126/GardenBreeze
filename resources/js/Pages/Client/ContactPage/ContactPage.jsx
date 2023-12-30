import ClientHeader from "@/Components/Header/ClientHeader";
import ClientLayout from "@/Layouts/ClientLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@mui/material";

function ContactPage() {
    return (
        <ClientLayout className="px-[120px] mt-[30px] gap-[120px]">
            <Head title="Contact to us" />
            <section className="flex-1 flex flex-col gap-[30px] justify-between">
                <div className="flex flex-col">
                    <span className="text-[21px] font-[600]">Contact Us</span>
                    <span className="text-gray-500">
                        Our teams would love to hear you
                    </span>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="name" className="text-[18px]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full h-[40px] border rounded-md outline-none p-[10px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="email" className="text-[18px]">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full h-[40px] border rounded-md outline-none p-[10px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="message" className="text-[18px]">
                            Message
                        </label>
                        <textarea
                            type="text"
                            id="message"
                            className="w-full border rounded-md outline-none h-[200px] p-[10px]"
                        />
                    </div>
                </div>
                <Button fullWidth variant="contained">
                    Submit
                </Button>
            </section>
            <section className="flex-1 h-[600px] bg-contact bg-cover shadow rounded-2xl">
                a
            </section>
        </ClientLayout>
    );
}

export default ContactPage;
