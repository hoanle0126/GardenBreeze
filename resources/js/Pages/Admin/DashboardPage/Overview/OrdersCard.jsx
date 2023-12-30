import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { primary } from "@/Contexts/ColorContext";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha(primary, 0.3),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: primary,
  },
}));

const OrdersCard = () => {
  const [order, setOrder] = useState([]);
  const getOrder = () => {
    
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          {order.length}
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Orders This Month</div>
      </div>
      <div className="h-[100px] w-full flex p-[20px] items-end">
        <Box sx={{ flexGrow: 1 }}>
          <div className="flex justify-between px-3 text-[1.1rem] font-[600]">
            <span>{50-order.length} to Goal</span>
            <span className="text-gray-500">{(order.length/(50-order.length)).toFixed(2)}%</span>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </div>
    </div>
  );
};

export default OrdersCard;
