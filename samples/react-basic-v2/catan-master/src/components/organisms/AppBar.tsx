/* eslint-disable */
import React, { FC } from "react";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import SwipeableTemporaryDrawer from "../molecules/SwipeableDrawer";

const CmAppBar: FC = () => {
  return (
    <Box sx={{ flexGlow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SwipeableTemporaryDrawer>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon/>
            </IconButton>
          </SwipeableTemporaryDrawer>
          <Typography variant="h6">Catan Master</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CmAppBar;