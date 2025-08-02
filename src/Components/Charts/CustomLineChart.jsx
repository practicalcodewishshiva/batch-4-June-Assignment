import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 1400, pv: 400, amt: 400,sh:120 },
  { name: "Page B", uv: 1800, pv: 800, amt: 1200, sh:820 },
  { name: "Page C", uv: 100, pv: 400, amt: 400 },
  { name: "Page D", uv: 890, pv: 900, amt: 1000 },
];

const CustomLineChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="My data series name" />

      <XAxis dataKey="sh" />
      <YAxis />
      {/* <Legend /> */}
    </LineChart>
  );
};

export default CustomLineChart;
