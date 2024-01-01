import { Avatar, Button, Rating } from "@mui/material";
import React from "react";

const ReviewProduct = ({ product }) => {
    return (
        <section className="w-full flex flex-col gap-[30px]">
            <div className="w-full text-[28px] font-[600]">Reviews</div>
            <div className="flex flex-col gap-[10px] -mt-[30px]">
                <div className="flex gap-[10px] items-center">
                    <Rating
                        size="large"
                        value={product?.avg_rating}
                        precision={0.1}
                        readOnly
                    />
                    <span className="text-[21px]">
                        ({product.review?.length})
                    </span>
                </div>
                <span>Based {product.review?.length} comments</span>
            </div>
            <div>
                <Button variant={"contained"}>Sort</Button>
            </div>
            <div className="flex flex-col gap-[30px] mt-[30px]">
                {product.review?.map((rv) => (
                    <div key={rv.id} className="flex flex-col min-h-[40px]">
                        <div className="flex gap-[5px] h-[30px] items-center">
                            <Avatar
                                src={rv.user?.avatar}
                                sx={{ width: "30px", height: "30px" }}
                            />
                            <span className="text-[21px] font-[600] text-primary-main-dark">
                                {rv.user?.name}
                            </span>
                            <Rating size="small" value={rv?.rating} readOnly />
                        </div>
                        <div className="pl-[35px] text-gray-500">
                            {rv.comment}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewProduct;
