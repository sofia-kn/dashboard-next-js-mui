import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Image from 'next/image'

function Menu() {
  return (
    <Paper  sx={{height:'100wh' ,display:{xs:'none', lg:'block'} }} >
      <Box m={2}>
        <Image src="/images/Dots .png" alt="Dots icon" width={38} height={10}/>
      </Box>
      <List component="nav">
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <HomeIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <Typography variant="h6">
            <ListItemText
              primary="Dashboard"
              sx={{ ml: "-2.5rem" }}
            ></ListItemText>
          </Typography>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <PersonOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Profile</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <LeaderboardOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Leaderboard</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Order</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <ShoppingBagOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Product</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <ShowChartIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Sales Report</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <ChatBubbleOutlineIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Message</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <SettingsOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Settings</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <StarBorderPurple500OutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Favourite</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <HistoryOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>History</ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ mb: "1.2rem", color: "gray.main" }}>
          <ListItemIcon>
            <ExitToAppOutlinedIcon sx={{ fontSize: "2rem" }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: "-2.5rem" }}>Signout</ListItemText>
        </ListItemButton>
      </List>
    </Paper>
  );
}

export default Menu;
