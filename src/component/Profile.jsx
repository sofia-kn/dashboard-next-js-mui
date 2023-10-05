import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import UserProfileBox from "./UserProfileBox";

function Profile() {

  
  return (
    <Box>
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
        <Box>
        </Box>
        <IconButton >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
          
      </Box>
          <Box display='flex' justifyContent="flex-end" mt='1rem' >
            <UserProfileBox />
          </Box>
    </Box>
  );
}

export default Profile;
