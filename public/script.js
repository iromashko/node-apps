const socket = io('/');
const myPeer = new Peer(undefined, {
  host: '/peerjs',
  port: 3000,
});

socket.emit('join-room', ROOM_ID, 10);

socket.on('user-connected', (userId) => {
  console.log(`User connected: ${userId}`);
});
