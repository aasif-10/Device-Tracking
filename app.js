const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();

const server = http.createServer(app);
const io = socket(server);
const socketHandler = require("./socket");
socketHandler(io);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
