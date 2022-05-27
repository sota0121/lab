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
  const likeCount = 888;
  return <span className='LikeButton'>♥ {likeCount}</span>
};

export default App;
