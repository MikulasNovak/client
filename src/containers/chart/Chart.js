import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/chart.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { ItemContext } from "../../providers/ItemProvider";
import { ListContext } from "../../providers/ListProvider";

function Chart() {
  const { listData } = useContext(ListContext);
  const { getProgress, getItemCount, itemData } = useContext(ItemContext);
  const { id } = useParams();

  // Find the current list

  const currentList = listData.find((list) => list.id === Number(id));

  // If no list is found or there are no items, return a message
  if (!currentList || getItemCount(currentList.id) === 0) {
    return (
      <div className="chartContainer">
        <h2 className="chartTitle">Chart</h2>
        <p className="noDataText">No data available.</p>
      </div>
    );
  }

  // Calculate resolved and unresolved values
  const resolved = Math.round(
    getProgress(currentList.id) / getItemCount(currentList.id) / 10
  );
  const unresolved = getItemCount(currentList.id) - resolved;

  // Prepare data for the chart
  const data = [
    { name: "Resolved", value: resolved },
    { name: "Unresolved", value: unresolved },
  ];

  // Colors for the chart
  const COLORS = ["#0D6943", "#3F3F3F"];

  return (
    <div className="chartContainer">
      <h2 className="chartTitle">Chart</h2>
      {itemData.length > 0 ? (
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
      ) : (
        <p className="noDataText">No items available.</p>
      )}
    </div>
  );
}

export default Chart;
