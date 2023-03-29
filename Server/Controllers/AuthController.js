import UserModel from "../models/User.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const signupController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        status: "error",
        msg: "signup UnSuccessfull",
        errors: errors.array(),
      });
    }
    const { name, email, password } = req.body;
    const UserFound = await UserModel.findOne({ email });
    if (UserFound) {
      res.status(401).json({
        status: "error",
        msg: "Please Enter Correct Credentials",
        data: {},
      });
    } else {
      const newUser = await UserModel.create({ name, email, password });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res.json({
        status: "Success",
        msg: "register Successfully",
        data: {
          token,
          userDetails: newUser,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "error",
      msg: err.message,
      data: { err },
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.login(email, password);
    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);

    res.json({
      status: "Success",
      msg: "Login Successfully",
      data: {
        token,
        userDetails: User,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "error",
      msg: err.message,
      data: { err },
    });
  }
};
