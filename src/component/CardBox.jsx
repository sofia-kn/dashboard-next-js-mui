import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Image from 'next/image'

function Cardbox({icon,
  count,
  title,
  precent}) {
  return (
    <Card
      sx={{
        bgcolor: "black.main",
        color: "white.main",               
      }}
    >
      <CardContent sx={{p:'10px 11px 9px 12px'}}>
        <Image src={icon} alt="icon" width={26} height={26}/>
        <Typography variant="h2" m='1.2rem 0.5rem'>{count}</Typography>
        <Typography variant="subtitle1" mb='0.5rem'>{title}</Typography>
        <Typography variant="subtitle1" pb='0'>{precent}</Typography>
      </CardContent>
    </Card>
  );
}

export default Cardbox;
