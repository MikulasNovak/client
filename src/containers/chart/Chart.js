import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/chart.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { ItemContext } from "../../providers/ItemProvider";
import { ListContext } from "../../providers/ListProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function Chart() {
  const { listData } = useContext(ListContext);
  const { itemData } = useContext(ItemContext);
  const { id } = useParams();
  const { t } = useTranslation();

  // Find the current list
  const currentList = listData.find((list) => list.id === Number(id));

  // If no list is found or there are no items, return a message
  if (!currentList || itemData.length === 0) {
    return (
      <div className="chartContainer">
        <h2 className="chartTitle">{t(`containers.chart`)}</h2>
        <p className="noDataText">No data available.</p>
      </div>
    );
  }

  // Calculate resolved and unresolved values
  const resolvedCount = itemData.filter((item) => item.resolved).length;
  const unresolvedCount = itemData.length - resolvedCount;

  // Prepare data for the chart
  const data = [
    { name: "Resolved", value: resolvedCount },
    { name: "Unresolved", value: unresolvedCount },
  ];

  // Colors for the chart
  const COLORS = ["#0D6943", "#5B5B5B"]; // Green for resolved, Grey for unresolved

  return (
    <div className="chartContainer">
      <h2 className="chartTitle">{t(`containers.chart`)}</h2>

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
