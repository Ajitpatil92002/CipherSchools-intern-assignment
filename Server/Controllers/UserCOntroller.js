import UserModel from "../models/User.js";


export const get_user = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
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
      res.status(200).json(updatedUser);
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
