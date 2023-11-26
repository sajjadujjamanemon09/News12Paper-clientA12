/* eslint-disable react-refresh/only-export-components */
import { Chart } from "react-google-charts";


export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
  export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

const AreaChart = () => {
    return (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      );
    }

export default AreaChart;
