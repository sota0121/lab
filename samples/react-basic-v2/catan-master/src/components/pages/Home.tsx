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
import RowRadioBtnGroup from '../molecules/RowRadioBtn'
import type { RadioItem, RowRadioBtnGroupProps } from '../molecules/RowRadioBtn'

const Home: FC = () => {

  const radioItems: RadioItem[] = [
    { label: '3 players', value: '3' },
    { label: '4 players', value: '4' },
  ]
  const [selIndex, setSelIndex] = React.useState(3); // num of players
  const props: RowRadioBtnGroupProps = {
    items: radioItems,
    selIndex,
    setSelIndex,
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Box
              sx={{
                width: '80%',
                height: '600px',
                backgroundColor: '#f5f5f5',
                borderRadius: '0.4rem',
                margin: '1rem auto',
              }}
            >
              <RowRadioBtnGroup {...props}/>
            </Box>
            <Box>
              {selIndex}
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
