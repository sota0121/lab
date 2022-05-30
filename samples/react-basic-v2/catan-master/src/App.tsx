import React, { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import User from './components/pages/Users';
import CmAppBar from './components/organisms/AppBar';

import './App.css';

/* eslint-disable */

const App: FC = () => {
  return (
    <>
      <CmAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/users" element={<User />}></Route>
      </Routes>
    </>
  );
};

export default App;
