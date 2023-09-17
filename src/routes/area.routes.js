import { Router } from "express";
import {
  getAllAreas,
  getArea,
  createArea,
  updateArea,
} from "../controllers/area.controller.js";
import { schemaValidation } from "../middlewares/validator.middlewares.js";
import { areaSchema } from "../schemas/area.schema.js";

const Routes = Router();

Routes.get("/", getAllAreas)
  .get("/:id", getArea)
  .post("/", schemaValidation(areaSchema), createArea)
  .patch("/", updateArea);

export default Routes;
