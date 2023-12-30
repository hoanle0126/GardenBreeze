import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

const DetailsProduct = ({ product }) => {
    const [tab, setTab] = useState("1");
    return (
        <div className="flex-1 w-full pt-[30px]">
            <div>
                <ButtonGroup>
                    <Button
                        variant={`${tab === "1" ? "contained" : "outlined"}`}
                        onClick={() => setTab("1")}
                    >
                        Description
                    </Button>
                    <Button
                        variant={`${tab === "2" ? "contained" : "outlined"}`}
                        onClick={() => setTab("2")}
                    >
                        Features
                    </Button>
                </ButtonGroup>
            </div>
            {tab === "1" ? (
                <div className="flex-1 py-[30px] w-[80%]">
                    {product.description}
                </div>
            ) : (
                <div className="flex-1 py-[30px] w-[80%] flex flex-col gap-[10px]">
                    <div className="flex items-start gap-[10px]">
                        <span className="w-[120px]">Common name</span>
                        <span className="flex-1">
                            {product.feature?.common_name}
                        </span>
                    </div>
                    <div className="flex items-start gap-[10px]">
                        <span className="w-[120px]">Science name</span>
                        <span className="flex-1">
                            {product.feature?.science_name}
                        </span>
                    </div>
                    <div className="flex items-start gap-[10px]">
                        <span className="w-[120px]">Plant family</span>
                        <span className="flex-1">
                            {product.feature?.plant_family}
                        </span>
                    </div>
                    <div className="flex items-start gap-[10px]">
                        <span className="w-[120px]">Source</span>
                        <span className="flex-1">
                            {product.feature?.source}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsProduct;
