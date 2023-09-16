import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Masculino", "Femenino", "No especificado"],
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
      "cirujano",
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

export default model("User", userSchema);
