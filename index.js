const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server);
app.use(express.static('public'))

app.get('/', (req,res) => {
})
/*
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
*/

const PORT = 3000
server.listen(PORT, () => {
  console.log(`server listeing on port:${PORT}`)
})
