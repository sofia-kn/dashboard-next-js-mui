import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from "@mui/material/IconButton";
import UserProfileBox from "./UserProfileBox";
import NotificationBox from "./NotificationBox";

function Profile() {
const[showUserProfile, setshowUserProfile] = useState(false)
const[showNotification, setShowNotification] = useState(false)
  
  return (
    <Box>
      <Box display="flex" justifyContent="end" alignItems="center">
        <IconButton onClick={()=> setShowNotification(true)}>
          <Badge color="red" overlap="circular" badgeContent="" variant="dot">
            <NotificationsNoneIcon fontSize="large"/>
          </Badge>
        </IconButton>
        
        <Avatar
          alt="Remy Sharp"
          src="/images/profile.jpg"
          sx={{ width: "3.2rem", height: "3.2rem", m: "0 1.5rem" }}
        />
        <Box>
        </Box>
        <IconButton onClick={()=> setshowUserProfile(true)}>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
          
      </Box>
          <Box display='flex' justifyContent="flex-end" mt='1rem' >
            <UserProfileBox setshowUserProfile={setshowUserProfile} showUserProfile={showUserProfile}/>
          </Box>
          <Box display='flex' justifyContent="flex-end">
            <NotificationBox setShowNotification={setShowNotification} showNotification={showNotification}/>
          </Box>
    </Box>
  );
}

export default Profile;
