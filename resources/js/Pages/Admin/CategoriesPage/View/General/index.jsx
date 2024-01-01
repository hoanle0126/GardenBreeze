/* eslint-disable react/prop-types */

import TextInput from "@/Components/TextInput";

const General = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">General</div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Category Name</div>
          <TextInput
            value={category?.name}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Category Name"
            onChange={(e) => {
              setCategory({ ...category, name: e.target.value });
            }}
          />
          <div className="text-gray-400 text-[12px]">
            A category name is required and recommended to be unique.
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Desciption</div>
          <textarea
            value={category?.description}
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full border rounded-lg p-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Type your text here..."
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
          ></textarea>
          <div className="text-gray-400 text-[12px]">
            Set a description to the category for better visibility.
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
