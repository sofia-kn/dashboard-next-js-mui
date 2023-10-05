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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/base";

function UserProfileBox() {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 380,
        height: "45rem",
        p: "3rem",
      }}
    >
      <List sx={{ p: "0" }}>
        <ListItem
          sx={{ display: "flex", justifyContent: "space-between", p: "0" }}
        >
          <Typography fontSize="1.8rem" fontWeight="500" color="#000">
            User Profile
          </Typography>
          <IconButton>
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
        <ListItem sx={{ p: "0", m: "2rem 0" }}>
          <Box width={40} height={40} bgcolor='warning.main'>
            <AttachMoneyIcon color="primary" fontSize="large"/>
          </Box>
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
      </List>
    </Paper>
  );
}

export default UserProfileBox;
