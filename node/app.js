const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

// GLOBAL MIDDLEWARES
//Implementing CORS
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

module.exports = app;
