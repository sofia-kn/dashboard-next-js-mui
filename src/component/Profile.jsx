import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from "@mui/material/IconButton";

function Profile() {
  return (
    <>
      <Box display="flex" justifyContent="end" alignItems="center">
        <IconButton>
          <Badge color="red" overlap="circular" badgeContent="" variant="dot">
            <NotificationsNoneIcon fontSize="large" />
          </Badge>
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="/images/profile.jpg"
          sx={{ width: "3.2rem", height: "3.2rem", m: "0 1.5rem" }}
        />
        <IconButton>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}

export default Profile;
