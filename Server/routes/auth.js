import express from "express";
import { body } from "express-validator";
import dotenv from "dotenv";
import {
  loginController,
  signupController,
} from "../Controllers/AuthController.js";

const router = express();
dotenv.config();

// create/signup a single user 
router.post(
  "/signup",
  body("name").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  signupController
);

// login a user
router.post("/login", loginController);

export default router;
