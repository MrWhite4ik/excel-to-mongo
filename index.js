require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", fileRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
