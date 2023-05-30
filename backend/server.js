const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const chats = require('./data/data.js');
const app = express()
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
    // console.log(chats)
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id); 
    res.send(singleChat)
  // console.log(chats)
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});