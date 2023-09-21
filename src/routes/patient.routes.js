import { Router } from "express";
import {
  signup,
  getAllPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

const Routes = Router();

Routes.post("/signup", signup)
  .get("/", getAllPatients)
  .get("/:id", getPatient)
  .delete("/:id", deletePatient);

export default Routes;
