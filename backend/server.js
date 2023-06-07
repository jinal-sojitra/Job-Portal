const express = require('express');
const dotenv = require('dotenv');
const userRoutes=require('./routes/userRoutes')
const {notFound,errorHandler} =require('./middleware/errorMiddleware')
dotenv.config()
const chatRoutes = require("./routes/chatRoutes")
const jobRoutes=require('./routes/jobRoutes') 
// const chats = require('./data/data.js');
const messageRoutes = require("./routes/messageRoutes")
const cors = require("cors");

const connectDB=require("./config/db.js")

const app = express()
app.use(express.json())


app.use(cors());

app.use(express.urlencoded({ extended: true }));
//to accept json data
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);
app.use("/job", jobRoutes);


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT ;

const server=app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
connectDB();


const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  }); 

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});