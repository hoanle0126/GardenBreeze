import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { alpha } from "@mui/material";
import { primary } from "@/Contexts/ColorContext";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

const RightCard = () => {
  return (
    <div className="col-span-6 h-[450px] card p-[30px] flex flex-col justify-between">
      <div className="font-[600] text-[16px]">Sales This Month</div>
      <div className="w-full h-[350px]">
        <div className="text-[28px] font-[700]">%14,094</div>
        <div className="text-[16px] font-[600] text-gray-400">Totals Sales</div>
        <ResponsiveContainer className="text-[12px]">
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 10,
              left: -20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke={alpha(primary,0.7)}
              fill={alpha(primary,0.3)}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RightCard;
