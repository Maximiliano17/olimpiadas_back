import { Router } from "express";
import {
  getAllAreas,
  getArea,
  createArea,
  updateArea,
  updatePersonal,
  updatePatient,
  deletePersonal,
  deletePatient,
  deleteArea,
} from "../controllers/area.controller.js";
import { schemaValidation } from "../middlewares/validator.middlewares.js";
import { areaSchema } from "../schemas/area.schema.js";

const Routes = Router();

Routes.get("/", getAllAreas)
  .get("/:id", getArea)
  .post("/", schemaValidation(areaSchema), createArea)
  .patch("/:id", updateArea)
  .put("/personal", updatePersonal)
  .put("/patient", updatePatient)
  .delete("/personal/:areaId/:userId", deletePersonal)
  .delete("/patient/:areaId/:patientId", deletePatient)
  .delete("/:id", deleteArea);

export default Routes;
