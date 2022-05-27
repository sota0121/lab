import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board.jsx';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

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
      <Stack spacing={2}>
        <Card variant='outlined'>item 1</Card>
        <Card variant='outlined'>item 2</Card>
        <Card variant='outlined'>item 3</Card>
      </Stack>
    </Board>
  );
};

