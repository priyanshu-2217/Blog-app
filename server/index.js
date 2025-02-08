import express from "express";
import connectToMongo from "./config/db.js";
import authRoutes from "./routes/blog.js";
import cors from "cors";

const app = express();
const port = 9000;
connectToMongo();

app.use(cors());
app.use(express.json());
app.use(express.static("public/upload"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/v1", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
