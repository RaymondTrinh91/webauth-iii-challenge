const express = require("express");

const authRouter = require("../api/auth/auth-router.js");
const userRouter = require("../api/users/user-router.js");

const server = express();

server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
