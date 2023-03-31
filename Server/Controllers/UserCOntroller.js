import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";

export const get_user = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        interests: user.interests,
        webLinks: user.webLinks,
        professionalInfo: user.professionalInfo,
        about: user.about,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update_user = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.about = req.body.about || user.about;
      user.webLinks = req.body.webLinks || user.webLinks;
      user.professionalInfo =
        req.body.professionalInfo || user.professionalInfo;
      user.interests = req.body.interests || user.interests;

      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        interests: updatedUser.interests.filter(
          (value, index, array) => array.indexOf(value) === index
        ),
        webLinks: updatedUser.webLinks,
        professionalInfo: updatedUser.professionalInfo,
        about: updatedUser.about,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const delete_user = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      await user.remove();
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const PasswordResetController = async (req, res) => {
  try {
    let { newpassword, password, email } = req.body;

    await UserModel.login(email, password);

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(newpassword, salt);

    const newUser = await UserModel.findByIdAndUpdate(req.params.id, {
      $set: { password },
    });

    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      interests: newUser.interests.filter(
        (value, index, array) => array.indexOf(value) === index
      ),
      webLinks: newUser.webLinks,
      professionalInfo: newUser.professionalInfo,
      about: newUser.about,
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
