import { Router } from "express";
import { signup } from "../controllers/patient.controller.js";

const Routes = Router();

Routes.post("/signup", test);

export default Routes;
