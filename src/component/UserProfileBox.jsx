import React from "react";
import {
  List,
  ListItem,
  Box,
  Paper,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { userProfile } from "../data/data";
import Button from "@mui/material/Button";

function UserProfileBox({ setshowUserProfile, showUserProfile }) {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 380,
        // height: "60rem",
        p: "3rem",
        zIndex: 1,
        display: showUserProfile == true ? "block" : "none",
      }}
    >
      <List sx={{ p: "0" }}>
        <ListItem
          sx={{ display: "flex", justifyContent: "space-between", p: "0" }}
        >
          <Typography fontSize="1.8rem" fontWeight="500">
            User Profile
          </Typography>
          <IconButton onClick={() => setshowUserProfile(false)}>
            <CancelOutlinedIcon fontSize="large" />
          </IconButton>
        </ListItem>
        <ListItem sx={{ p: "0", m: "2rem 0" }}>
          <Avatar
            src="/images/profile.jpg"
            sx={{ width: "9.6rem", height: "9.6rem" }}
          />
          <Box ml={4}>
            <Typography variant="profile">Michael Roberts</Typography>
            <Typography variant="subtitle2" color="gray.main" m="0.5rem 0">
              Administrator
            </Typography>
            <Typography variant="subtitle2" color="gray.dark" fontWeight="600">
              info@shop.com
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        {userProfile.map((item) => (
          <Box  key={item.id}>
            <ListItem
              sx={{
                p: "0",
                m: "2rem 0",
              }}
             
            >
              <Box
                width={40}
                height={40}
                bgcolor={item.bgColor}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                borderRadius="1rem"
              >
                {item.icon}
              </Box>
              <Box ml={3}>
                <Typography variant="h2">{item.title}</Typography>
                <Typography variant="subtitle2" color="gray.main">
                  {item.description}
                </Typography>
              </Box>
            </ListItem>
            <Divider />
          </Box>
        ))}
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
          <Typography color="white.main">Logout</Typography>
        </Button>
      </List>
    </Paper>
  );
}

export default UserProfileBox;
