import { Router } from "express";
import {
  getAllAreas,
  getArea,
  createArea,
  updateArea,
  updatePersonal,
  deletePersonal,
} from "../controllers/area.controller.js";
import { schemaValidation } from "../middlewares/validator.middlewares.js";
import { areaSchema } from "../schemas/area.schema.js";

const Routes = Router();

Routes.get("/", getAllAreas)
  .get("/:id", getArea)
  .post("/", schemaValidation(areaSchema), createArea)
  .patch("/", updateArea)
  .put("/personal", updatePersonal)
  .delete("/personal/:areaId/:userId", deletePersonal);

export default Routes;
