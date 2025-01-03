import express from "express";
import connectToMongo from "./config/db.js";

const app = express();
const port = 3000;
connectToMongo();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    