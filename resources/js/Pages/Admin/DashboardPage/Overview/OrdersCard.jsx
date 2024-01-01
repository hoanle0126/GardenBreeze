import { primary } from "@/Contexts/ColorContext";
import { Box, LinearProgress, alpha, linearProgressClasses, styled } from "@mui/material";
import { usePage } from "@inertiajs/react";

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
  const {props} = usePage()

  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          {props.countOrder.length}
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Orders This Month</div>
      </div>
      <div className="h-[100px] w-full flex p-[20px] items-end">
        <Box sx={{ flexGrow: 1 }}>
          <div className="flex justify-between px-3 text-[1.1rem] font-[600]">
            <span>{50-props.countOrder.length} to Goal</span>
            <span className="text-gray-500">{(props.countOrder.length/50*100).toFixed(2)}%</span>
          </div>
          <BorderLinearProgress variant="determinate" value={(props.countOrder.length/50*100).toFixed(2)} />
        </Box>
      </div>
    </div>
  );
};

export default OrdersCard;
