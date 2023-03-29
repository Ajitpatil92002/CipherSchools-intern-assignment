import express from "express";
import { connectDb } from "./config/connectDb.js";
import AuthRoute from "./routes/auth.js";
import UserRoute from "./routes/user.js";
import cors from "cors";
import VerifyToken from "./middlewares/authMiddleware.js";

const app = express();
connectDb();

// Configurations
const Port = process.env.PORT || 5500;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", AuthRoute);
app.use("/api",VerifyToken,UserRoute)

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    msg: "404 Not Page Not Found",
  });
});

app.listen(Port, () => {
  console.log(`Server running at Port : ${Port}`);
});
