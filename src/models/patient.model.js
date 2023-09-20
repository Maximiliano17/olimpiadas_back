import { model, Schema } from "mongoose";

export const patientSchema = new Schema({
  fullname: {
    type: String,
    lowercase: true,
    required: true,
  },
  dni: {
    type: Number,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
});



export default model("Patient", patientSchema);
