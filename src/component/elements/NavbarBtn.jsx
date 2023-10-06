import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NavbarBtn({title}) {
  return (
    <Button
      sx={{
        width: "100%",
        p: "1.2rem",
        height: "4.8rem",
        borderRadius: "1rem",
        mt: "2rem",
      }}
      variant="contained"
      color="Purple"
    >
      <Typography color="white.main" textTransform="initial">{title}</Typography>
    </Button>
  );
}

export default NavbarBtn;
