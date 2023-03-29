import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  about: { type: String, required: true },
  webLinks: {
    fb: { type: String },
    instagram: { type: String },
    github: { type: String },
    website: { type: String },
  },
  professionalInfo: {
    highestEducation: { type: String },
    currentOccupation: { type: String },
  },
  interests: [{ type: String }],
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  console.log(user);
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
