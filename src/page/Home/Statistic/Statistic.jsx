import Container from "../../../components/ui/Container";
import { Chart } from "react-google-charts";

const Statistic = () => {
  return (
    <Container>
      <div className="text-center my-10">
        <h2 className="text-5xl font-bold text-cyan-600">Statistic</h2>
      </div>
      <div>
        <Chart
          chartType="ScatterChart"
          data={[
            ["Age", "Weight"],
            [4, 5.5],
            [8, 12],
          ]}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    </Container>
  );
};

export default Statistic;
