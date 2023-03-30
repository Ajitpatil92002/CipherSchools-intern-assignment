import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  about: { type: String, default: "" },
  webLinks: {
    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
    github: { type: String, default: "" },
    website: { type: String, default: "" },
    twitter: { type: String, default: "" },
    linkedIn: { type: String, default: "" },
  },
  professionalInfo: {
    highestEducation: { type: String, default: "" },
    currentOccupation: { type: String, default: "" },
  },
  interests: [{ type: String }],
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const found = await bcrypt.compare(password, user.password);
    if (found) {
      return user;
    } else {
      throw Error("incorrect password");
    }
  } else {
    throw Error("incorrect email");
  }
};

const user = mongoose.model("user", UserSchema);
export default user;
