import React, { PureComponent } from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 6400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 5000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 6700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 4800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 6500,
    amt: 2100,
  },
];
export default class CustomerChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
         
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F2C8ED" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F2C8ED" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide/>
          <YAxis hide/>
          <CartesianGrid opacity={0}/>
          <Tooltip />
          <Area
            type="linear"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="linear"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
