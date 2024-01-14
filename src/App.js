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
    primary: green,
    secondary: green
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxwidth: '100%' }} >
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '55px'   }} >
          <Typography variant="h4">The Pictionary Game</Typography>
        </Container>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginTop: '65px', backgroundColor: 'whitesmoke' }} >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
            <Typography variant="h6">Create Room</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
            <Typography>Username :</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <TextField
              id="outlined-textarea"
              label="Username"
              placeholder="Enter your Username"
              multiline 
              style = {{ width: '60%' }}
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }}>
            <Button variant="contained" style = {{ backgroundColor: 'rgb(42, 206, 53)', height: '40px' }} >Create Room</Button>
          </Container>
        </Container>

        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginTop: '45px', backgroundColor: 'whitesmoke', marginBottom: '55px' }} >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
            <Typography variant="h6">Join Room</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
            <Typography>Username</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <TextField
              id="outlined-textarea"
              label="Username"
              placeholder="Enter your Username"
              multiline
              style = {{ width: '60%' }}
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
            <Typography>Room ID</Typography>
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <TextField
              id="outlined-textarea"
              label="Room ID"
              placeholder="Enter your ID"
              multiline
              style = {{ width: '60%' }}
            />
          </Container>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }}>
            <Button variant="contained" style = {{ backgroundColor: 'rgb(42, 206, 53)', height: '40px' }} >Join Room</Button>
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
