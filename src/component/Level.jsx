import { Typography } from "@mui/material";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <>
       <Typography variant="h2">Level</Typography>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 40,
              right: 25,
              left: -25,
              bottom: -5,
            }}
            barCategoryGap={26}
          >
            <CartesianGrid opacity={0} />
            <XAxis padding={{ left: 20, right: 20 }} opacity={0} />
            <YAxis opacity={0} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#A9DFD8"
              background={{ fill: "#2B2B36" }}
              legendType="none"
            />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
