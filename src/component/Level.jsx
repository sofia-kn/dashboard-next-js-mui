import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Image from "next/image";
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

];

export default class Example extends PureComponent {
  render() {
    return (
      <Box height='19.7rem' minWidth='23.7rem'>
        <Typography variant="h2" m='1.4rem 0 0 1.38rem'>Level</Typography>
        <ResponsiveContainer minWidth="30%" height="65%">
          <BarChart
            data={data}
            barSize={15}
            margin={{
              bottom: 0,
              top: 20,
              left: 45,
              right: 45,
              
            }}
          >
            <CartesianGrid opacity={0}/>
            <XAxis hide padding={{ left: 20, right: 20 }} />
            <YAxis hide />
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
        <Divider orientation="horizontal" variant="fullWidth" flexItem />
        <Box
          mt="1.4rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Image
              src="/images/Ellipse 3.png"
              width={6}
              height={6}
              alt="icon"
            />
            <Typography variant="subtitle1" color="gray.light" ml="0.4rem">
              Volume
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            variant="inset"
            flexItem
            sx={{ m: "0 4rem" }}
          />

          <Box display="flex" alignItems="center">
            <Image
              src="/images/Ellipse 4.png"
              width={6}
              height={6}
              alt="icon"
            />
            <Typography variant="subtitle1" color="gray.light" ml="0.4rem">
              Last Month
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
