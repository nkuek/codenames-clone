const io = require('socket.io')({
    cors: {
        origin: '*',
    },
});

const connectedUsers = {};

io.on('connection', (socket) => {
    socket.on('test', () => {
        console.log('hello from test route!');
    });

    socket.on('create room', (data) => {
        socket.user = data.nickname;
        socket.join(data.room);
    });
});

module.exports = io;
