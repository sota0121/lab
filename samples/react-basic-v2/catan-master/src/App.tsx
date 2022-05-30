import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button,
  Drawer,
} from '@mui/material';

import {
  Home as HomeIcon,
  SportsEsports as SportsEsportsIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import User from './components/pages/Users';
import CmAppBar from './components/organisms/AppBar';

import './App.css';

/* eslint-disable */

const TemporaryDrawer: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const toggleDrawer = () => {
    setAnchorEl(!anchorEl);
  };

  const list = () => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {['Home', 'Manager', 'Users'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              color='primary'
              component={Link}
              to={`/${text.toLowerCase()}`}
            >
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : index === 1 ? <SportsEsportsIcon /> : <PeopleIcon />}
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
      <Button onClick={toggleDrawer} >drawer open</Button>
      <Drawer
        anchor='left'
        open={anchorEl}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
};


const App: FC = () => {
  return (
    <>
      <CmAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/users" element={<User />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
