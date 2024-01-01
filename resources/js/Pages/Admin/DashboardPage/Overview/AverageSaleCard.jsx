import { alpha } from "@mui/material";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/Functions/FormatCurrency";
import { primary } from "@/Contexts/ColorContext";
import { usePage } from "@inertiajs/react";

const AverageSaleCard = () => {
  const {props} = usePage()

  const average = () => {
    let total = 0;
    props.avgSelling.forEach((element) => {
      total += element.avg;
    });
    total /= props.avgSelling.length;
    return formatCurrency(total);
  };

  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          {average()}
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Average Daily Sales</div>
      </div>
      <div className="overview__card--contents">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={props.avgSelling}
            margin={{ left: 30, bottom: 20, top: 10 }}
          >
            <Bar dataKey="avg" fill={alpha(primary, 0.7)} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageSaleCard;
