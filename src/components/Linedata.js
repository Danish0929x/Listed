import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Linedata() {
  // Sample chart data
  const pdata = [
    {
      name: "MongoDb",
      student: 11,
      fees: 120,
    },
    {
      name: "Javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "PHP",
      student: 5,
      fees: 10,
    },
    {
      name: "Java",
      student: 10,
      fees: 5,
    },
    {
      name: "C#",
      student: 9,
      fees: 4,
    },
    {
      name: "C++",
      student: 10,
      fees: 8,
    },
  ];
  return (
    <>
    <h1 className="text-heading" style={{ margin: '50px 10px' }}>
Activities</h1>
      <ResponsiveContainer width="100%" height={"20%"} aspect={3}>
        <LineChart data={pdata} margin={{ right: 50 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Linedata;
