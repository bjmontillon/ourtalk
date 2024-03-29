const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const cors = require('cors');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

app.use(cors());

http.listen(port, () => {
  console.log(`Socket.IO server running at https://ourtalk-chatapp.herokuapp.com/`);
});
