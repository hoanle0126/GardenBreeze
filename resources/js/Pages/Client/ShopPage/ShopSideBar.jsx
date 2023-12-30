import { router, usePage, } from "@inertiajs/react";
import { Button, Checkbox, Rating, Slider } from "@mui/material";
import { useEffect, useState } from "react";

const ShopSideBar = ({ categories, filter, setFilter }) => {
    const [price, setPrice] = useState([0, 50]);
    const [choose, setChoose] = useState([]);
    const [rating, setRating] = useState([]);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const handleSubmit = () => {
        setFilter({ ...filter, price: price });
    };

    useEffect(() => {
        setFilter({ ...filter, categories: choose });
    }, [choose]);

    useEffect(() => {
        setFilter({ ...filter, ratings: rating });
    }, [rating]);

    return (
        <aside className="w-[450px]">
            <div className="pl-[120px] w-full h-[60px] border-b flex items-center text-[21px] font-[600]">
                Filter
            </div>
            <div className="w-full">
                <div className="pl-[120px] flex flex-col w-full justify-end gap-[10px] border-b py-[30px]">
                    <span className="font-[600] text-green-main-dark">
                        Categories
                    </span>
                    {categories?.map((category) => (
                        <span key={category.id} className="flex items-center">
                            <Checkbox
                                value={category.id}
                                onChange={(e) =>
                                    e.target.checked
                                        ? setChoose([...choose, category.name])
                                        : setChoose((current) =>
                                              current.filter(
                                                  (c) => c !== category.name
                                              )
                                          )
                                }
                            />
                            <span>{category.name}</span>
                        </span>
                    ))}
                </div>
                <div className="pl-[120px] pr-[60px] flex flex-col w-full items-start gap-[10px] py-[30px] border-b">
                    <span className="font-[600] text-green-main-dark">
                        Price range
                    </span>
                    <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        max={50}
                    />
                    <Button variant={"outlined"} onClick={handleSubmit}>
                        Set Price
                    </Button>
                </div>
                <div className="pl-[120px] flex flex-col w-full items-start gap-[10px] py-[30px]">
                    <span className="font-[600] text-green-main-dark">
                        Rating
                    </span>
                    {[5, 4, 3, 2, 1].map((item) => (
                        <span
                            key={item}
                            className="flex items-center gap-[10px]"
                        >
                            <Checkbox
                                onChange={(e) => {
                                    e.target.checked
                                        ? setRating([...rating, item])
                                        : setRating((current) =>
                                              current.filter((c) => c !== item)
                                          );
                                }}
                            />
                            <Rating value={item} readOnly />
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ShopSideBar;
