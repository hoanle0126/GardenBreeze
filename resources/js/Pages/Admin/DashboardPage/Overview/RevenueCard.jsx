import { primary, secondary } from "@/Contexts/ColorContext";
import { alpha } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "Office Bonsai" },
  { value: 10, label: "Fenshui Bonsai" },
  { value: 15, label: "Other" },
];

const RevenueCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          $60,000
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Revenue</div>
      </div>
      <div className="overview__card--contents flex items-center">
        <PieChart
          colors={[alpha(primary,0.7), alpha("#E5E7EB",0.7), alpha(secondary,0.7)]}
          series={[
            {
              data,
              innerRadius: 20,
            },
          ]}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "middle", horizontal: "right" },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              labelStyle:{fontSize:13},
            },
          }}
          margin={{
            left: -20,
            bottom: 20,
          }}
        />
      </div>
    </div>
  );
};

export default RevenueCard;
