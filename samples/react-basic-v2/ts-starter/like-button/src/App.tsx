import React, { useState } from 'react';
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
  const [likeCount, setLikeCount] = useState(0);

  const onClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <span className='LikeButton' onClick={onClick}>
      ♥ {likeCount}
    </span>
  )
};

export default App;
