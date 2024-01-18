const express = require('express');
const http = require('http');
const app = express();
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const port = process.env.PORT || 8080;

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {

    socket.on('join-room', ({ roomID, username }) => {
        console.log(`roomID: ${roomID}, username: ${username}`);
        socket.join(roomID);
        socket.to(roomID).emit('user-connected', username);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('send-message', ({ roomID, username, message }) => {
        console.log(`roomID: ${roomID}, username: ${username}, message: ${message}`);
        socket.to(roomID).emit('receive-message', { username, message });
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
