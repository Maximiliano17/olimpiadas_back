import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const Routes = Router();

Routes.post("/signin", signin).post("/signup", signup);

export default Routes;
