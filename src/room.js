import { Container, Typography, createTheme } from '@mui/material/';
import './App.css';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/';
import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { io } from 'socket.io-client';

const theme = createTheme({
    palette: {
        primary: green,
        secondary: green
    }
})

const socket = io.connect('http://localhost:8080');

function Prne ({ props }) {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} >
            {props.slice(-12).map((item) => (
                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} >
                    {item}
                </Container>   
            ))}
        </Container>
    )
}

function Room(props) {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLeavebutton = () => {
        props.pgchk(true);
        navigate('/');
    }

    const handleSendbutton = () => {
        if (message === '') {
            alert('Please enter a message');
            return;
        }

        socket.emit('send-message', { roomID: props.rID, username: props.uname, message });
        setMessage('');
    }

    const Prnm = ({ props }) => {
        return (
            <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} >
                {props.slice(-12).map((item) => (
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} >
                        {item}
                    </Container>   
                ))}
            </Container>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: "1500px" }} >
                <Container style={{ display: 'flex', flex: '2', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px', marginRight: '10px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '400px' }} >
                        <Prnm  props = {props.alluser} />
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} >
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', width: '100%' }} >Start</Button>
                        <Container style={{ backgroundColor: 'rgb(42, 206, 53)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', height: '40px', borderRadius: '5px' }} > Room ID: {props.rID} </Container>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(42, 206, 53)', height: '40px', marginTop: '25px', marginBottom: '25px', width: '100%' }} onClick={handleLeavebutton} >Leave</Button>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '5', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px', marginRight: '10px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '500px' }} >
                        <Typography> Chat </Typography>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center', marginTop: '20px', border: '2px solid black', borderRadius: '10px', height: '650px' }} >
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px', border: '2px solid black', borderRadius: '10px', height: '600px' }} >
                        <Prne props={props.msg} />
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: '25px', width: '350px' }} >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Message"
                                placeholder='Type your message here'
                                multiline
                                maxRows={4}
                                style={{ width: '100%' }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button variant="contained" onClick={handleSendbutton} style={{ backgroundColor: 'rgb(42, 206, 53)', width: '25%', marginLeft: '3px', height: '55px' }} >SEND</Button>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </ThemeProvider >
    );
}

export default Room;