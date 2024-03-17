const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

connectDB();

app.get("/test", (req, res) => {
  res.json("Test Works");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
