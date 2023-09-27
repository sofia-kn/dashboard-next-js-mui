import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
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
      <CardContent sx={{ p: "11px 13px 8px 14px" }}>
        <Image src={icon} alt="icon" width={26} height={26} />
        <Typography variant="h2" m="1.2rem 0.5rem">
          {count}
        </Typography>
        <Typography variant="subtitle1" mb="0.5rem">
          {title}
        </Typography>
        <Typography variant="subtitle1" pb="0px">
          {precent}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cardbox;
