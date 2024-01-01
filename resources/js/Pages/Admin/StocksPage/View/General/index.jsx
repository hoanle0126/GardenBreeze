/* eslint-disable react/prop-types */
import TextInput from "@/Components/TextInput";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { usePage } from "@inertiajs/react";
import { Button, IconButton, Skeleton, Switch } from "@mui/material";
import { useState } from "react";
import CloseIcon from "resources/assets/icons/close";

const General = ({ product, setProduct }) => {
  const [sales, setSales] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelectImage = async (e) => {
    setLoading(true);
    const imgUrl = await uploadToCloudinary(e.target.files[0]);
    setProduct({
      ...product,
      images: [...product.images, { src: imgUrl }],
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">General</div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Product Name</div>
          <TextInput
            value={product.name}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Product Name"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
          <div className="text-gray-400 text-[12px]">
            A product name is required and recommended to be unique.
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Desciption</div>
          <textarea
            value={product.description}
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full border rounded-lg p-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Type your text here..."
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
          <div className="text-gray-400 text-[12px]">
            Set a description to the product for better visibility.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">Image</div>
        <div className="grid grid-cols-5 gap-y-[30px]">
          {product.images?.map((image, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={image.src}
                  alt={index}
                  className="h-[150px] w-[150px] rounded-xl shadow-md"
                />
                <div
                  className="absolute rounded-full bg-white top-[-13px] right-[23px] shadow-md flex-center"
                  onClick={() =>
                    setProduct({
                      ...product,
                      images: product.images.filter((c) => c !== image),
                    })
                  }
                >
                  <IconButton color="primary">
                    <CloseIcon size={10} color={"#333"} />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <Skeleton
              variant="rectangular"
              sx={{ width: 150, height: 150, borderRadius: "12px" }}
            />
          )}
        </div>
        <Button
          component="label"
          variant="outlined"
          onChange={handleSelectImage}
        >
          <div className="text-default font-[600] cursor-pointer">
            Click to upload
          </div>
          <TextInput type="file" className="hidden" />
        </Button>
      </div>
      <div className="flex flex-col gap-[20px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">Pricing</div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Base Price</div>
          <TextInput
            value={product.price.base_price}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Base Price"
            onChange={(e) => {
              setProduct({
                ...product,
                price: { ...product.price, base_price: e.target.value },
              });
            }}
          />
          <div className="text-gray-400 text-[12px]">
            Set the product price.
          </div>
          <div className="text-[12px] font-[600]">Sales</div>
          <Switch checked={sales} onChange={() => setSales(!sales)} />
          {sales && (
            <div className="flex flex-col gap-[20px]">
              <TextInput
                value={product.price.sales}
                type="text"
                className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
                placeholder="Product Name"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: { ...product.price, sales: e.target.value },
                  });
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default General;
