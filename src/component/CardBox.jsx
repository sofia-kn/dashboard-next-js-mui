import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

function Cardbox({icon,
  count,
  title,
  precent}) {
  return (
    <Card
      sx={{
        height: "10.7rem",
        bgcolor: "black.main",
        color: "white.main",               
      }}
    >
      <CardContent >
        <img src={icon} alt="icon" />
        <Typography variant="h2" mb='0.5rem'>{count}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle1" width='100%' maxWidth='100%'>{precent}</Typography>
      </CardContent>
    </Card>
  );
}

export default Cardbox;
