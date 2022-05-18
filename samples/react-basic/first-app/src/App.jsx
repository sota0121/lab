import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board.jsx';
import Button from '@mui/material/Button'


const tasks = [
  "task1",
  "task2",
  "task3"
]


export const App = () => {
  return (
    <Board tasks={tasks}>
      <h2>Board Title</h2>
      <Button variant='contained'>Button</Button>
    </Board>
  );
};

