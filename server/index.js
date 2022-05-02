const express = require('express')
const http = require("http");
const cors = require('cors')
const Server = require("socket.io");
const port = process.env.PORT || 5000
const app = express()


app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
  

io.on("connection", (socket) => {
    console.log(socket.id)
  
    socket.on("joinroom", room => {
          socket.join(room)
    })
  
    socket.on("newMessage", ({newMessage, room}) => {
      io.in(room).emit("getnewlatestmsg", newMessage)
    })
  
  });
  
app.get("/", (req, res) => {res.send("Chat app "); res.end()})  
  
server.listen(port, console.log(`Server started at port http://localhost:${port}`))