/* eslint-disable */

import React, { FC } from 'react';
import {
  Box,
  Grid
} from '@mui/material';

const Dashboard: FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{ bg: 'background.paper', p: 3, textAlign: 'center' }}
        >
          <h2>Dashboard</h2>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;