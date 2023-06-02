const express = require('express');
const dotenv = require('dotenv');
const userRoutes=require('./routes/userRoutes')
const {notFound,errorHandler} =require('./middleware/errorMiddleware')
dotenv.config()
const chatRoutes=require("./routes/chatRoutes")
// const chats = require('./data/data.js');
// const messageRoutes = require("./routes/messageRoutes")

const connectDB=require("./config/db.js")

const app = express()
app.use(express.json())
//to accept json data
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

const server=app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
connectDB();


const io = require('socket.io')(server, {
  pingTimeout:60000,
  cors: {
    origin:"http://localhost:3000",
  },
})

io.on("connection", (socket) => {
  console.log('connected to socket.io')

//   socket.on('setup', (userData) => {//perticular user
//     socket.join(userData._id);
//     console.log(userData._id)
//     socket.emit("connected"); 
//   })

//   socket.on('join chat', (room) => {
//     socket.join(room);
//     console.log("User Joined Room: " + room);
//   })
// })