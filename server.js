const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");
const express = require("express");
const cors = require("cors");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const proverb = require("./proverb");
app.prepare().then(() => {
  const expressServer = express();
  expressServer.use(cors());

  expressServer.use("/static", express.static("./src/calc"));
  const httpServer = createServer(expressServer);

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT"],
    },
  });
  const chatNamespace = io.of("/chat");

  chatNamespace.on("connection", (socket) => {
    chatNamespace.emit("joinUser", {
      userCount: io.engine.clientsCount,
    });
    socket.on("sendMessage", (data) => {
      chatNamespace.emit("receiveMessage", {
        ...data,
        timeStamp: new Date().getTime(),
      });
      const randomIndex = Math.floor(Math.random() * proverb.length);

      chatNamespace.emit("receiveMessage", {
        userName: "관리자",
        message: proverb[randomIndex],
        timeStamp: new Date().getTime(),
      });
    });
  });

  const ASpace = io.of("/bfa4");
  ASpace.on("connection", (socket) => {
    console.log("test conn");
    socket.on("changeScore", (data) => {
      ASpace.emit("changeScore", {
        ...data,
      });
    });

    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * proverb.length);
      socket.emit("proverb", {
        proverb: proverb[randomIndex],
      });
    }, 10000);
  });

  const BSpace = io.of("/c0e3");

  expressServer.get("*", (req, res) => {
    return handle(req, res);
  });
  expressServer.post("*", (req, res) => {
    return handle(req, res);
  });
  expressServer.put("*", (req, res) => {
    return handle(req, res);
  });
  httpServer.listen(port, () => {
    console.log(`> Ready on http://113.198.233.57:${port}`);
  });
});
