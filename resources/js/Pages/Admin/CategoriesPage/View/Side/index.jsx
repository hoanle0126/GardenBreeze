/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoImages } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";

const SideAddProduct = ({ category, setCategory }) => {
  const [selectImage, setSelectImage] = useState("");

  const handleSelectImage = async (e) => {
    const imgUrl = await uploadToCloudinary(e.target.files[0]);
    setCategory({
      ...category,
      thumbnail: imgUrl,
    });
    setSelectImage(imgUrl);
  };

  useEffect(() => {
    setSelectImage(category.thumbnail);
  }, [category]);

  return (
    <div className="col-span-3 flex flex-col gap-[30px]">
      <div className="w-full h-[350px] card p-[20px]">
        <div className="absolute text-sm font-[600]">Thumbnail</div>
        <div className="w-full h-full flex-center flex-col gap-[15px]">
          <div className="w-[150px] h-[150px] card flex-center relative">
            <label
              htmlFor="thumbnail"
              className="absolute top-[-5px] right-[-5px] bg-white shadow-md text-gray-400 hover:text-primary cursor-pointer rounded-full  p-[5px]"
            >
              <BiPencil />
            </label>
            {selectImage && (
              <img
                src={selectImage}
                alt=""
                className="w-[150px] h-[150px]  rounded-md"
              />
            )}
            <IoImages className="text-[80px] text-primary/10" />
          </div>
          <input
            type="file"
            id="thumbnail"
            className="hidden"
            onChange={handleSelectImage}
          />
          <div className="text-gray-400 w-[200px] text-[12px]">
            Set the category thumbnail image. Only *.png, *.jpg and *.jpeg image
            files are accepted
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAddProduct;
