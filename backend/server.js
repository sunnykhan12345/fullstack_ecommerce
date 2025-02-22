const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
connectDB();
app.get("/", (req, res) => {
  res.send("welcome to e commerce api projects ");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
