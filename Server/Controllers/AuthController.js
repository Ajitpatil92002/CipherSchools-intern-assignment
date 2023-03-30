import UserModel from "../models/User.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
    let { name, email, password } = req.body;
    const UserFound = await UserModel.findOne({ email });
    if (UserFound) {
      res.status(401).json({
        status: "error",
        msg: "Please Enter Correct Credentials",
        data: {},
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      const newUser = await UserModel.create({ name, email, password });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res.json({
        status: "Success",
        msg: "register Successfully",
        data: {
          token,
          userDetails: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
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
        userDetails: {
          _id: User._id,
          name: User.name,
          email: User.email,
        },
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
