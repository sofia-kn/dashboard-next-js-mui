import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Cardbox({ icon, count, title, precent }) {
  return (
    <Card
      sx={{
        bgcolor: "black.main",
        color: "white.main",
        borderRadius: "1rem",
        minWidth:'10.4rem',
        height:'10.7rem'
      }}
    >
      <Box sx={{p:'1rem 1.1rem 0.9rem 1.2rem'}} >
        <Image src={icon} alt="icon" width={26} height={26} />
        <Typography variant="h2" margin='1.2rem 0 0.5rem 0'>
          {count}
        </Typography>
        <Typography variant="subtitle1" mb='0.5rem'>
          {title}
        </Typography>
        <Typography variant="subtitle1" >
          {precent}
        </Typography>
      </Box>
    </Card>
  );
}

export default Cardbox;
