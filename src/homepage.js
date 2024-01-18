import { Container, Typography, createTheme } from '@mui/material/';
import './App.css';
//import { Container } from '@mui/material';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import Room from './room';

const socket = io.connect('http://localhost:8080');

const theme = createTheme({
  palette: {
    primary: green,
    secondary: green
  }
})

function HomePage() {

  //const navigate = useNavigate();

  const [roomID, setRoomID] = useState('');
  const [username, setUsername] = useState('');
  const [pagechk, setPagechk] = useState(true);

  const handleCreateRoom = () => {
    if (username === '') {
      alert('Please enter a username');
      return;
    }

    setRoomID(Math.random().toString(36).substring(7));
    console.log(roomID);
    setPagechk(false);

    //navigate('/room');

    socket.emit('join-room', { roomID, username });
  }

  const handleJoinRoom = () => {
    if (username === '') {
      alert('Please enter a username');
      return;
    }

    setPagechk(false);

    //navigate('/room');

    socket.emit('join-room', { roomID, username });
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('user-connected', (username) => {
      console.log(`${username} connected`);
    });
  }, []);

  useEffect(() => {
    socket.on('receive-message', ({ username, message }) => {
      setMessages(prevMessages => [...prevMessages, `${username}: ${message}`]);
    });
  }, []);


  return (
    <ThemeProvider theme={theme}>
      {pagechk ?
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxwidth: '100%' }} >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '55px' }} >
            <Typography variant="h4">The Pictionary Game</Typography>
          </Container>
          <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginTop: '65px', backgroundColor: 'whitesmoke' }} >
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
              <Typography variant="h5">Create Room</Typography>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
              <Typography variant='h6'>Username :</Typography>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <TextField
                id="outlined-textarea"
                label="Username"
                placeholder="Enter your Username"
                multiline
                style={{ width: '60%' }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }}>
              <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px' }} onClick={handleCreateRoom} >Create Room</Button>
            </Container>
          </Container>

          <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginTop: '45px', backgroundColor: 'whitesmoke', marginBottom: '55px' }} >
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
              <Typography variant="h5">Join Room</Typography>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
              <Typography variant='h6'>Username :</Typography>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <TextField
                id="outlined-textarea"
                label="Username"
                placeholder="Enter your Username"
                multiline
                style={{ width: '60%' }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
              <Typography variant='h6'>Room ID :</Typography>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <TextField
                id="outlined-textarea"
                label="Room ID"
                placeholder="Enter your ID"
                multiline
                style={{ width: '60%' }}
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
              />
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }}>
              <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px' }} onClick={handleJoinRoom} >Join Room</Button>
            </Container>
          </Container>
        </Container> : <Room pgchk={setPagechk} uname={username} rID={roomID} msg={messages} />}
    </ThemeProvider>
  );
}

export default HomePage;
