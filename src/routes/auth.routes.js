import { Router } from "express";
import {
  signin,
  signup,
  getAllProfiles,
  getProfile,
} from "../controllers/auth.controller.js";

const Routes = Router();

Routes.post("/signin", signin)
  .post("/signup", signup)
  .get("/", getAllProfiles)
  .get("/:id", getProfile);

export default Routes;
