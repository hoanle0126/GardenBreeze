const CategoriesSection = ({ categories }) => {
    return (
        <section className="flex flex-col gap-[30px]">
            <div className="w-full text-center flex flex-col">
                <span className="text-[21px] font-[600] text-secondary/70">
                    Our Services
                </span>
                <span className="text-[32px] font-[700] text-gr">
                    Our Categories
                </span>
            </div>
            <div className="w-full max-h-[380px] overflow-hidden grid grid-cols-12 gap-[40px]">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="col-span-4 h-[100px] flex"
                    >
                        <img
                            src={category.thumbnail}
                            alt={category.name}
                            className="w-[100px] h-[100px]"
                        />
                        <div className="pl-[20px] flex-1 h-full flex flex-col gap-[10px] justify-center">
                            <div className="text-[21px] font-[600] text-primary-main-dark">
                                {category.name}
                            </div>
                            <div className="text-[14px] text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;
