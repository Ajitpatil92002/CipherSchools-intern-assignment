import express from "express";
import { connectDb } from "./config/connectDb.js";
import AuthRoute from "./routes/auth.js";
import BlogRoute from "./routes/blog.js";
import cors from "cors";

const app = express();
connectDb();

// Configurations
const Port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    msg: "Hello wellcome to patilajit.com",
  });
});
app.use("/auth", AuthRoute);
app.use("/blog", BlogRoute);

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    msg: "404 Not Page Not Found",
  });
});

app.listen(Port, () => {
  console.log(`Server running at Port : ${Port}`);
});
