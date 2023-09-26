import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Divider from "@mui/material/Divider";

function Customer() {
  return (
    <>
      <Box p={2}>
        <Typography>Customer Fulfilment</Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Image src="/images/Graph.png" width={214} height={106} alt="graph" />
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <Box
        // p="1.4rem"
        mt="1.4rem"
        // mb="2rem"
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

        <Divider orientation="vertical" variant="inset" flexItem sx={{m:'0 rem'}} />

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
