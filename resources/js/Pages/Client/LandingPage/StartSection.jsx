import { router } from "@inertiajs/react";
import { Button } from "@mui/material";
import React from "react";

const StartSection = () => {
    return (
        <div className="h-screen">
            <section className="absolute bg-landing h-full bg-cover pt-[60px]">
                <div className="w-[45%] pt-[80px]  flex flex-col gap-[20px]">
                    <div className="text-[64px] font-[700] text-primary-main-dark">
                        Take Care Of The Trees, They Will Take Care Of{" "}
                        <span className="text-secondary/70">You.</span>
                    </div>
                    <div className="text-gray-500">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                    </div>
                    <div className="mt-[80px] flex gap-[30px]">
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                paddingX: "20px",
                                paddingY: "10px",
                                fontSize: "24px",
                                borderRadius: "180px",
                                width: "160px",
                                borderBottomRightRadius: "0",
                            }}
                            onClick={() => {
                                router.visit("/shop");
                            }}
                        >
                            Get Start
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartSection;
