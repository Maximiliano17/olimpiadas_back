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
});

export default model("Area", areaSchema);
