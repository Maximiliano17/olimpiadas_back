import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dataOfBirth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  specialization: {
    type: String,
    enum: [
      "cirugia",
      "pediatria",
      "ginecologia",
      "obstetricia",
      "cardiologia",
      "neurologia",
      "oftalmologia",
      "dermatologia",
      "otorrinolaringologia",
      "ortopedia",
      "psiquiatria",
      "anestesiologia",
      "radiologia",
      "urologia",
      "oncologia",
    ],
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
});

userSchema.methods.encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("User", userSchema);
