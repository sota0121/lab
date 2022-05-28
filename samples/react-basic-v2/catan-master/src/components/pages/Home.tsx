/* eslint-disable */

import React, { FC } from 'react';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';


const CmAppBar: FC = () => {
  const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGlow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            <MenuIcon
              id="menu-button"
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
            <Menu
              id='simple-menu'
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'simple-menu'
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6">Catan Master</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};



const Home: FC = () => {


  return (
    <>
      <CmAppBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Box
              sx={{
                width: '50%',
                height: '300px',
                backgroundColor: '#f5f5f5',
                borderRadius: '0.4rem',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
                <h2>Home</h2>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
