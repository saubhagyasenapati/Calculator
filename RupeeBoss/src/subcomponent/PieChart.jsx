import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Loan EMI", 10000],
  ["Total Payable Interest", 1000],
  ["Total Payment(Principal + Int)", 11000],
];

export const options = {
  legend: "none",
  slices: {
    0: { color: "#F51E1E" },
    1: { color: "#FFCD1B" },
    2: { color: "#6CDCF4" },
  },

};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
