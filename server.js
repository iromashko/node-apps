const express = require('express');
const app = express();
const { v4: uuidV4 } = require('uuid');
const { ExpressPeerServer } = require('peer');

const server = require('http').Server(app);

const peerServer = ExpressPeerServer(server, {
  path: '/zoom-clone',
});

const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));
app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);
  });
});

let port = process.env.PORT;
if (!port || port === '') {
  port = 3000;
}
server.listen(port);
