/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 100,
    amt: 100,
  },
  {
    name: "Feb",
    pv: 150,
    amt: 200,
  },
  {
    name: "Mar",
    pv: 600,
    amt: 300,
  },
  {
    name: "Apr",
    pv: 400,
    amt: 400,
  },
  {
    name: "May",
    pv: 500,
    amt: 300,
  },
  {
    name: "Jun",
    pv: 500,
    amt: 500,
  },
  {
    name: "Jul",
    pv: 600,
    amt: 600,
  },
  {
    name: "Aug",
    pv: 120,
    amt: 120,
  },
  {
    name: "Sep",
    pv: 400,
    amt: 350,
  },
  {
    name: "Oct",
    pv: 600,
    amt: 100,
  },
  {
    name: "Nov",
    pv: 400,
    amt: 400,
  },
  {
    name: "Oct",
    pv: 200,
    amt: 140,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={30} dx={10} textAnchor="end" fill="white" fontSize='12px' fontWeight='600'>
          {payload.value}
        </text>
      </g>
    );
  }
}
class CustomizedAxisYTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dx={-10} dy={10} textAnchor="end" fill="white" fontSize='12px' fontWeight='600'>
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={452}
          height={163}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid opacity={0} />
          <XAxis
            dataKey="name"
            height={60}
            tick={<CustomizedAxisTick />}
            opacity={0}
          />
          <YAxis
            dataKey="amt"
            type="number"
            tick={<CustomizedAxisYTick />}
            opacity={0}
          />
          <Tooltip />
         
          <Line
            type="linear"
            dataKey="pv"
            stroke="#A9DFD8"
            
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
