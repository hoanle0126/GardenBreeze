import { primary, secondary } from "@/Contexts/ColorContext";
import { formatCurrency } from "@/Functions/FormatCurrency";
import { usePage } from "@inertiajs/react";
import { alpha } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const RevenueCard = () => {
    const { props } = usePage();
    console.log(props);
    const data = [
        { value: props.first[0].revenues, label: props.first[0].name },
        { value: props.second[0].revenues, label: props.second[0].name },
        { value: props.other, label: "Other" },
    ];
    return (
        <div className="dashboard__overview--left-items">
            <div className="overview__card">
                <div className="overview__card--header">
                    {formatCurrency(props.revenue)}
                    <div className="overview__card--badge"></div>
                </div>
                <div className="overview__card--subheader">Revenue</div>
            </div>
            <div className="overview__card--contents flex items-center">
                <PieChart
                    colors={[
                        alpha(primary, 0.7),
                        alpha("#E5E7EB", 0.7),
                        alpha(secondary, 0.7),
                    ]}
                    series={[
                        {
                            data,
                            innerRadius: 20,
                        },
                    ]}
                    slotProps={{
                        legend: {
                            direction: "column",
                            position: {
                                vertical: "middle",
                                horizontal: "right",
                            },
                            itemMarkWidth: 10,
                            itemMarkHeight: 10,
                            labelStyle: { fontSize: 13 },
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
