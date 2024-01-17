import { Container, Input, Typography, createTheme } from '@mui/material/';
import './App.css';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LINK } from 'react-router-dom'


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
                <Container style={{ display: 'flex', flex: '2', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px', marginRight: '10px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '400px' }} >
                        <Typography>User 1</Typography>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', width: '100%' }} >Start</Button>
                        <Container style={{ backgroundColor: 'rgb(42, 206, 53)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} > Room ID </Container>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', marginBottom: '25px', width: '100%' }} >Leave</Button>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '5', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px', marginRight: '10px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '500px' }} >
                        <Typography>Chat</Typography>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '600px' }} >
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginTop: 'auto', marginBottom: '25px', width: '350px' }} >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Message"
                                placeholder='Type your message here'
                                multiline
                                maxRows={4}
                                style={{ width: '100%' }}
                            />
                            <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', width: '25%', marginLeft: '3px', height: '55px' }} >SEND</Button>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </ThemeProvider >
    );
}

export default Room;