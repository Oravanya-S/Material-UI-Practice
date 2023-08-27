import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DonutSmall, ShoppingCart, Yard, Block, AdminPanelSettings, AccountBox } from '@mui/icons-material'
export default function Sidebar() {
  return (
    <Box 
      sx={{ 
        flex: 1, 
        minWidth: '260px',
        p: 1, 
        display: { xs: 'none', lg: 'block'},
      }}
    >
      <Box
        position='fixed'
      >
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#dashboard">
              <ListItemIcon>
                <DonutSmall />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#user">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#product">
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#blog">
              <ListItemIcon>
                <Yard />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#login">
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#notfound">
              <ListItemIcon>
                <Block />
              </ListItemIcon>
              <ListItemText primary="Not Found" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
    </Box>
  );
}
