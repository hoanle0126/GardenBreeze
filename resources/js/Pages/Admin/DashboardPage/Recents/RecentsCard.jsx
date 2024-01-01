import { useEffect, useState } from "react";
import Item from "./Orders/Item";
import { usePage } from "@inertiajs/react";

const RecentsCard = () => {
    const { props } = usePage();
    const categories = props.categories;
    const [value, setValue] = useState(categories[0]);

    const getCategories = () => {};

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="h-[450px] card lg:col-span-6 col-span-12 p-[20px] flex flex-col gap-[20px]">
            <div className="text-sm font-[600] text-dark">Categories</div>
            <div className="w-full h-[70px] flex gap-[20px]">
                {categories?.map((category) => (
                    <div
                        key={category.id}
                        className={`tab ${
                            value.id === category.id && "tab--active"
                        } flex flex-col items-center cursor-pointer `}
                        onClick={() => setValue(category)}
                    >
                        <img
                            className="w-[70px] h-[70px] rounded-2xl"
                            src={category.thumbnail}
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <Item products={value.product} />
        </div>
    );
};

export default RecentsCard;
