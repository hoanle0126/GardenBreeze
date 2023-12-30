import FreeShipping from "icons/freeShipping";
import DaysReturns from "icons/90daysReturns";
import PaymentsIcon from "icons/payments";
import ColorContext from "@/Contexts/ColorContext";

const ServiceSection = () => {
  return (
    <section className="w-full flex justify-between">
      <div className="w-[300px] h-[300px] flex flex-col items-center justify-center">
        <PaymentsIcon
          primary={ColorContext.palette.primary.main}
          secondary={ColorContext.palette.secondary.main}
          size={140}
        />
        <span className="text-[21px] font-[600] text-green-main-dark">
          Security Payment
        </span>
        <span className="text-center w-[90%] text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
      <div className="w-[300px] h-[300px] flex flex-col items-center justify-center">
        <FreeShipping
          primary={ColorContext.palette.primary.main}
          secondary={ColorContext.palette.secondary.main}
          size={140}
        />
        <span className="text-[21px] font-[600] text-green-main-dark">
          Free Shipping
        </span>
        <span className="text-center w-[90%] text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
      <div className="w-[300px] h-[300px] flex flex-col items-center justify-center">
        <DaysReturns
          primary={ColorContext.palette.primary.main}
          secondary={ColorContext.palette.secondary.main}
          size={140}
        />
        <span className="text-[21px] font-[600] text-green-main-dark">
          90 Days Return
        </span>
        <span className="text-center w-[90%] text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
    </section>
  );
};

export default ServiceSection;
