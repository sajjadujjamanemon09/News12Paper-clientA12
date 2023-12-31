/* eslint-disable react-refresh/only-export-components */

import { Chart } from "react-google-charts";
import Container from "../../../../ui/Container";

export const data = [
  ["Task", "Hours per Day"],
  ["Daily Star", 11],
  ["The Independent", 2],
  ["New Age", 2],
  ["Dhaka Tribune", 2],
  ["Dhaka News", 7],
];

export const options = {
  title: "Pie Chart",
};

const PieChart = () => {
  return (
    <Container>
      <div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </Container>
  );
};

export default PieChart;
