// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db.js");
// const userRouter = require("./routes/UserRouter.jsx");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000;
// connectDB();
// app.get("/", (req, res) => {
//   res.send("welcome to e commerce api projects ");
// });

// // call api router

// app.use("/api/users", userRouter);
// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRouter = require("./routes/UserRouter.jsx");
// const productRouter = require("./routes/productRoutes.js");
const productRoutes = require("./routes/productRoutes.jsx")

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API Project");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
