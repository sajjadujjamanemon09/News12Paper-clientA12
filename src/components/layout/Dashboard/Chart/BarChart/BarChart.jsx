/* eslint-disable react-refresh/only-export-components */


import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Daily Star", 8.94, "#b87333"], // RGB value
  ["New Age", 10.49, "silver"], // English color name
  ["Dhaka Tribune", 19.3, "gold"],
  ["The Independent", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

const BarChart = () => {
    return (
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
      );
    }

export default BarChart;