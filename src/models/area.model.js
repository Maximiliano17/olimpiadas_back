import { Schema, model } from "mongoose";

export const areaSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  beds: {
    type: Number,
    default: 1,
  },
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
  personal: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  level: {
    type: String,
    Enum: ["low", "normal", "high"],
    required: true,
  },
  personal: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  schedule: {
    type: String,
    lowercase: true,
    required: true,
  },
  alarm: {
    type: Boolean,
    default: false,
  },
});

export default model("Area", areaSchema);
