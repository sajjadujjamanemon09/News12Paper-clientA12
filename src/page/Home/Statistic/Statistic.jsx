/* eslint-disable react-refresh/only-export-components */
import SectionTitle from "../../../components/section/SectionTitle";
import Container from "../../../components/ui/Container";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Activities",
};


const Statistic = () => {
  return (
    <Container>
              <SectionTitle
          subHeading={"CHART"}
          heading={"STATISTIC"}
        ></SectionTitle>
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

export default Statistic;

