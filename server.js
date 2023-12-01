const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");
const express = require("express");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressServer = express();

  expressServer.use("/static", express.static("./src/calc"));
  const httpServer = createServer(expressServer);

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const chatNamespace = io.of("/chat");

  chatNamespace.on("connection", (socket) => {
    chatNamespace.emit("joinUser", {
      userCount: io.engine.clientsCount,
    });
    socket.on("sendMessage", (data) => {
      console.log(data);
      chatNamespace.emit("receiveMessage", {
        ...data,
        time_stamp: new Date().getTime(),
      });
    });
  });

  expressServer.get("*", (req, res) => {
    return handle(req, res);
  });
  expressServer.post("*", (req, res) => {
    return handle(req, res);
  });
  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
