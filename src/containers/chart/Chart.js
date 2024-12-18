import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/chart.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { ItemContext } from "../../providers/ItemProvider";
import { ListContext } from "../../providers/ListProvider";
// Example data for the pie chart

function Chart() {
  const { listData } = useContext(ListContext);
  const { getProgress, getItemCount } = useContext(ItemContext);
  const { id } = useParams();
  const currentList = listData.find((list) => list.id === Number(id));

  const resolved = Math.round(
    getProgress(currentList.id) / getItemCount(currentList.id) / 10
  );
  const unresolved = getItemCount(currentList.id) - resolved;
  const data = [
    {
      name: "Resolved",
      value: resolved,
    },
    { name: "B", value: unresolved },
  ];
  const COLORS = ["#0D6943", "#3F3F3F"];

  return (
    <div className="chartContainer">
      <h2 className="chartTitle">Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            label
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
