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
import { notifMessages } from "../../data/data";
import Button from "@mui/material/Button";

function NotificationBox({setShowNotification, showNotification}) {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 380,
        // height: "60rem",
        p: "3rem",
        zIndex: 1,
        display: showNotification == true ? "block" : "none",
        mr: "11rem",
      }}
    >
      <List sx={{ p: "0" }}>
        <ListItem
          sx={{ display: "flex", justifyContent: "space-between", p: "0" }}
        >
          <Typography fontSize="1.8rem" fontWeight="500" >
            Messages
          </Typography>
          <IconButton onClick={() => setShowNotification(false)}>
            <CancelOutlinedIcon fontSize="large" />
          </IconButton>
        </ListItem>
        {notifMessages.map((item) => (
          <Box key={item.id}>
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
                <Avatar src={item.avatar} alt="image" />
              </Box>
              <Box ml={3}>
                <Typography variant="user">{item.title}</Typography>
                <Typography variant="subtitle2" color="gray.dark" mt={1.3}>
                  {item.message}
                </Typography>
                <Typography variant="subtitle2" color="gray.dark" mt={0.5}>
                  {item.time}
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
          <Typography color="white.main" textTransform="initial">
            See all messages
          </Typography>
        </Button>
      </List>
    </Paper>
  );
}

export default NotificationBox;
