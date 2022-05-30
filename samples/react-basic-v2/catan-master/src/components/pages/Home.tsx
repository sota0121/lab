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

import SwipeableTemporaryDrawer from '../molecules/SwipeableDrawer';

const Home: FC = () => {


  return (
    <>
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
            <SwipeableTemporaryDrawer
              btnLabel="Menu"
            />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
