import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";


function Earnings() {
  return (
    <Box>
      <Typography variant="h2" mb='0.5rem'>Earnings</Typography>
      <Typography variant="subtitle1" color="gray.main" mb='0.9rem'>
        Total Expense
      </Typography>
      <Typography variant="price" color="success.main" >
        $6078.76
      </Typography>
      <Typography variant="subtitle1" color="gray.main" mt='0.9rem'>
        Profit is 48% More than last Month
      </Typography>
      <Box display="flex" justifyContent="center" mt={3} position='relative'>
        <Image src="/images/Percentage meter.png" width={174} height={150} alt='image'/>
        <Typography position='absolute' top={60} fontSize='2.5rem' fontWeight='700'>80%</Typography>
      </Box>
    </Box>
  );
}

export default Earnings;
