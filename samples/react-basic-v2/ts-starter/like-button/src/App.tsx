import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

const LikeButton = () => {
  return <span>Like Button is here.</span>
};

export default App;
