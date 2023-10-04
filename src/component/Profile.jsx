import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Profile() {
  return (
    <>
      <Box display="flex" justifyContent="end" alignItems="center">
        <Badge
          color="red"
          overlap="circular"
          badgeContent=""
          variant="dot"
       
        >
          <NotificationsNoneIcon fontSize="large"/>
        </Badge>
        <Avatar
          alt="Remy Sharp"
          src="/images/profile.jpg"
          sx={{ width: "3.2rem", height: "3.2rem", m: "0 1.5rem" }}
        />
        <KeyboardArrowDownIcon fontSize="large"/>
      </Box>
    </>
  );
}

export default Profile;
