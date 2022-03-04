const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const Server = require('socket.io');
const io = Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running.');
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
