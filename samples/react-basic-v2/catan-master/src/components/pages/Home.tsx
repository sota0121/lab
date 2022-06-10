/* eslint-disable */

import React, { FC, useEffect, useContext, memo } from 'react';
import { useNavigate } from 'react-router';
import {
  AppBar,
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  TextFieldProps,
  Toolbar,
  Typography,
} from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';

import RowRadioBtnGroup from '../molecules/RowRadioBtn'
import type { RadioItem, RowRadioBtnGroupProps } from '../molecules/RowRadioBtn'
import { PlayerInfoContext } from '../providers/PlayerInfoProviders';
import type { PlayerInfoContextType, playerInfoList } from '../providers/PlayerInfoProviders';

const Home: FC = memo(() => {
  // --------------------------------------------------
  // Setup State
  // --------------------------------------------------
  const [selIndex, setSelIndex] = React.useState(3); // num of players
  const [playerLabels, setPlayerLabels] = React.useState<string[]>([]);
  const [ alertDisplay, setAlertDisplay ] = React.useState<boolean>(false);

  // --------------------------------------------------
  // Preparation
  // --------------------------------------------------
  const radioItems: RadioItem[] = [
    { label: '3 players', value: 3 },
    { label: '4 players', value: 4 },
  ]
  const props: RowRadioBtnGroupProps = {
    items: radioItems,
    selIndex,
    setSelIndex,
  };
  const navigate = useNavigate();

  // --------------------------------------------------
  // Seutp Context
  // --------------------------------------------------
  const { playerList, setPlayerList } = useContext(PlayerInfoContext) as PlayerInfoContextType;

  // --------------------------------------------------
  // Asyncronous Processes
  // --------------------------------------------------
  useEffect(() => {
    selIndex === 3 ? setPlayerLabels(['Player 1', 'Player 2', 'Player 3']) : setPlayerLabels(['Player 1', 'Player 2', 'Player 3', 'Player 4']);

  }, [selIndex]);

  const playerNames = [
    React.useRef<TextFieldProps>(null), // player 1
    React.useRef<TextFieldProps>(null), // player 2
    React.useRef<TextFieldProps>(null), // player 3
    React.useRef<TextFieldProps>(null), // player 4
  ]

  // --------------------------------------------------
  // Component Functions
  // --------------------------------------------------
  const playerInputs = playerLabels.map((label, index) => (
    (
      <>
        <AccountCircleIcon sx={{ color: 'action.activate', mr: 1, my: 0.5 }} />
        <TextField inputRef={playerNames[index]} id={label} label={label} variant='standard' required />
      </>
    )
  ));
  const InputsWithIcon = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {playerInputs}
      </Box>
    );
  };

  // --------------------------------------------------
  // Hnadlers
  // --------------------------------------------------
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // check all inputs are filled
    const inputs = playerNames.map(input => input.current);
    const inputsFilled = inputs.every(input => input?.value !== '');

    // set player names
    if (inputsFilled) {
      const playerListExtracted: playerInfoList = inputs.map((value, index) => {
        return {
          name: value?.value as string,
          id: index,
        };
      });
      console.log(playerListExtracted);
      setPlayerList(playerListExtracted);
      // const playerNamesExtracted = playerNames.map(playerName => {
      //   const strName: string = playerName.current?.value as string;
      //   return strName;
      // });
      // setPlayers(playerNamesExtracted);
      setAlertDisplay(false);
      console.log(playerList);
      // move to dashboard
      navigate('/dashboard');
    }
    else {
      // show error
      setAlertDisplay(true);
    }
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Box
              sx={{
                width: '80%',
                height: '600px',
                backgroundColor: '#ffffff',
                borderRadius: '0.4rem',
                margin: '1rem auto',
              }}
            >
              <RowRadioBtnGroup {...props}/>
              <InputsWithIcon />
              <Box
                sx={{
                  textAlign: 'center',
                  margin: '1rem auto',
                }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleClick}
                >
                  Start Game
                </Button>
                {alertDisplay && (
                  <Alert severity='error'>
                    Please fill in all the player names.
                  </Alert>
                )}
              </Box>
            </Box>
        </Grid>
      </Grid>
    </>
  );
});

export default Home;
