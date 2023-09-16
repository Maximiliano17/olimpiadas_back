import express from "express";
import "./database.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.set("PORT", process.env.PORT || 4000);

app.use("/api/v1/auth", authRoutes);

app.listen(app.get("PORT"), () => {
  console.log("app escuchando en el puerto " + app.get("PORT"));
});
