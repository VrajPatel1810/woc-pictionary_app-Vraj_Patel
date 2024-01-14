import { Container, Typography, createTheme } from '@mui/material/';
import './App.css';
//import { Container } from '@mui/material';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: green
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', maxwidth: '100%' }} >
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', color: 'white' }} >
          <Typography variant="h4">The Pictionary Game</Typography>
        </Container>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '2px solid black', marginTop: '60px', backgroundColor: 'grey' }} >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} >
            <Typography variant="h6">Create Room</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Typography>Username :</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
            <TextField
              id="outlined-textarea"
              label="Username"
              placeholder="Enter your Username"
              multiline
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Button variant="contained">Create Room</Button>
          </Container>
        </Container>

        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '2px solid black', marginTop: '40px', backgroundColor: 'grey', marginBottom: '50px' }} >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} >
            <Typography variant="h6">Join Room</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Typography>Username</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
            <TextField
              id="outlined-textarea"
              label="Username"
              placeholder="Enter your Username"
              multiline
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Typography>Room ID</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
            <TextField
              id="outlined-textarea"
              label="ID"
              placeholder="Enter your ID"
              multiline
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Button variant="contained">Join Room</Button>
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
