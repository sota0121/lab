/* eslint-disable */
import * as React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Link,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import User from '../pages/Users';

type SwipeableDrawerProps = {
  btnLabel?: string;
  children?: React.ReactNode;
};

const SwipeableTemporaryDrawer: React.FC<SwipeableDrawerProps> = (props: SwipeableDrawerProps) => {
  const [openState, setOpenState] = React.useState(false);

  const toggleDrawerX = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenState(open);
  };

  const pageMap = [
    { path: '/', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/users', element: <User /> },
  ];

  const listX = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawerX(false)}
      onKeyDown={toggleDrawerX(false)}
    >
      <List>
        {["Start", "Dashboard", "Users"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
                {/* {index % 2 === 0 ? <PeopleIcon /> : <PeopleIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawerX(true)}>{props.btnLabel || props.children}</Button>
      <SwipeableDrawer
        anchor="left"
        open={openState}
        onClose={toggleDrawerX(false)}
        onOpen={toggleDrawerX(true)}
      >
        {listX()}
      </SwipeableDrawer>
    </>
  );
}

export default SwipeableTemporaryDrawer;