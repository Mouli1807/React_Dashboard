
// TotalSales component displays a pie chart and sales breakdown
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';


const TotalSales = ({ data }) => {
  // Custom tooltip for pie chart showing percentage
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const total = data.reduce((sum, d) => sum + d.value, 0);
      const percent = total ? ((value / total) * 100).toFixed(1) : 0;
      return (
        <div className="bg-black text-white text-[12px] font-semibold rounded-[6px] px-[10px] py-[4px] shadow-md">
          {percent}%
        </div>
      );
    }
    return null;
  };

  // Main card container
  return (
    <div className="flex flex-col gap-[20px] w-full bg-global-6 rounded-[16px] p-[24px]">
      {/* Title */}
      <span className="text-[14px] font-inter font-semibold text-global-1">
        Total Sales
      </span>

      {/* Pie chart section */}
      <div className="flex justify-center items-center">
        <div className="w-[140px] h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* Pie chart for sales data */}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={5}
                cornerRadius={6}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              {/* Tooltip for percentage */}
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales breakdown by item */}
      <div className="flex flex-col gap-[12px] w-full">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <div className="flex items-center gap-[6px]">
              {/* Color dot for item */}
              <span
                className="inline-block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {/* Item name */}
              <span className="text-[13px] text-global-1 font-inter">{item.name}</span>
            </div>
            {/* Item value */}
            <span className="text-[13px] text-global-1 font-inter">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TotalSales;
