import { formatCurrency } from "@/Functions/FormatCurrency";
import { Carousel } from "primereact/carousel";

const responsiveOptions = [
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
];

const productTemplate = (item) => {
  return (
    <div className="px-[50px] pb-[10px]">
      <div className="h-[380px] bg-white shadow-md rounded-2xl rounded-br-none flex items-center flex-col gap-[20px] p-[10px]">
        <div className="w-full h-[200px] rounded-t-2xl flex justify-center items-center">
          <img src={item.thumbnail} alt="" className="w-[90%] h-[90%]" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[21px] text-primary-main-dark font-[600] w-[100%-20px] text-center line-clamp-1">
            {item?.name}
          </span>
          <span className="text-[14px] text-gray-500 text-left w-[90%] line-clamp-2">
            {item?.description}
          </span>
          <span className="text-[32px] mt-[10px] text-primary-main-dark">
            ${formatCurrency(item.price.base_price)}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = ({products}) => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="w-full text-center flex flex-col">
        <span className="text-[21px] font-[600] text-secondary/70">
          Our Services
        </span>
        <span className="text-[32px] font-[700]">
          Our Plants & Trees
        </span>
      </div>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        autoplayInterval={3000}
      />
    </section>
  );
};

export default ProductsSection;
