import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ItemImage = ({ product }) => {
  const [selectImage, setSelectImage] = useState(product?.thumbnail);

  return (
    <div className="w-[620px] h-[500px] flex gap-[20px]">
      <div className="w-[100px] h-[500px] overflow-scroll hide--scroll">
        {product.images?.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.id}
            className="w-full h-[100px] border mt-[10px] first:mt-0 cursor-pointer"
            onClick={() => setSelectImage(image.src)}
          />
        ))}
      </div>
      <img
        src={selectImage}
        alt={product.name}
        className="w-[500px] h-full  border"
      />
    </div>
  );
};

export default ItemImage;
