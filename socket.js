module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("new");
    socket.on("send-location", (data) => {
      io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
      io.emit("user-disconnected", socket.id);
    });
  });
};
