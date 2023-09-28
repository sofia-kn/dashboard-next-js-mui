import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import CustomerChart from "./CustomerChart";

function Customer() {
  return (
    <>
      <Box pl='1.4rem'>
        <Typography>Customer Fulfilment</Typography>
      </Box>
      <Box minWidth='21.4rem' height='10.6rem' margin='1.4rem 1.3rem'>
      <CustomerChart/>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <Box
        mt="1.4rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Box display="flex" alignItems="center">
            <Image
              src="/images/Ellipse 1.png"
              width={6}
              height={6}
              alt="icon"
            />
            <Typography variant="subtitle1" color="gray.light" ml="0.4rem">
              Last Month
            </Typography>
          </Box>
          <Typography variant="subtitle1" mt="0.5rem">
            $4,087
          </Typography>
        </Box>

        <Divider orientation="vertical" variant="inset" flexItem sx={{m:'0 4rem'}} />

        <Box>
          <Box display="flex" alignItems="center">
            <Image
              src="/images/Ellipse 1.png"
              width={6}
              height={6}
              alt="icon"
            />
            <Typography variant="subtitle1" color="gray.light" ml="0.4rem">
              Last Month
            </Typography>
          </Box>
          <Typography variant="subtitle1" mt="0.5rem">
            $4,087
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Customer;
