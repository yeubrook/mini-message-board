const express = require("express");
const path = require("node:path");

const app = express()
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const baseFunction = require("./routers/baseRoute.js");

app.use('/', baseFunction(messages));

app.listen(8080);