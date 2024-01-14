import { Container, Input, Typography, createTheme } from '@mui/material/';
import './App.css';
//import { Container } from '@mui/material';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LINK } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: green,
        secondary: green
    }
})

function Room() {
    return (
        <ThemeProvider theme={theme}>
            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: "1500px" }} >
                <Container style={{ display: 'flex', flex: '2', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '55px', border: '2px solid green' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid blue' }} >
                        <Typography>User 1</Typography>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', width: '100%' }} >Start</Button>
                        <Container style={{ backgroundColor: 'rgb(42, 206, 53)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} > Room ID </Container>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', marginBottom: '25px', width: '100%' }} >Leave</Button>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '5', justifyContent: 'center', alignItems: 'center', marginTop: '55px', border: '2px solid red' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid blue' }} >
                        <Typography>Chat</Typography>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center', marginTop: '55px', border: '2px solid yellow' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid blue' }} >
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
                            <Input placeholder="Type a Message" style={{ width: '100%' }} />
                        </Container>
                    </Container>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default Room;