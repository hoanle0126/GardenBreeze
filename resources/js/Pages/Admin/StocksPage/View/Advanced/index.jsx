import TextInput from "@/Components/TextInput";

/* eslint-disable react/prop-types */
const Advanced = ({ product, setProduct }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">Stocks</div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Quantity</div>
          <TextInput
            value={product.stock.quantity}
            type="number"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Quantity"
            onChange={(e) =>
              setProduct({ ...product, stock: { quantity: e.target.value } })
            }
          />
          <div className="text-gray-400 text-[12px]">Enter the product quantity.</div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] card p-[20px]">
        <div className="text-sm font-[600] text-dark">Features</div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Common Name</div>
          <TextInput
            value={product.feature?.common_name}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Common Name"
            onChange={(e) =>
              setProduct({
                ...product,
                feature: { ...product.feature, common_name: e.target.value },
              })
            }
          />
          <div className="text-gray-400 text-[12px]">Enter the common names.</div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Science Name</div>
          <TextInput
            value={product.feature?.science_name}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Science Name"
            onChange={(e) =>
              setProduct({
                ...product,
                feature: { ...product.feature, science_name: e.target.value },
              })
            }
          />
          <div className="text-gray-400 text-[12px]">Enter the science names.</div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Plant family</div>
          <TextInput
            value={product.feature?.plant_family}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Plant family"
            onChange={(e) =>
              setProduct({
                ...product,
                feature: { ...product.feature, plant_family: e.target.value },
              })
            }
          />
          <div className="text-gray-400 text-[12px]">Enter the plant family.</div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="text-[12px] font-[600]">Source</div>
          <TextInput
            value={product.feature?.source}
            type="text"
            className="w-full border h-[40px] rounded-lg flex items-center pl-[10px] text-default font-[600] focus:outline-primary"
            placeholder="Source"
            onChange={(e) =>
              setProduct({
                ...product,
                feature: { ...product.feature, source: e.target.value },
              })
            }
          />
          <div className="text-gray-400 text-[12px]">Enter the source.</div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
