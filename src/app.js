import express from "express";
import "./database.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import areaRoutes from "./routes/area.routes.js";

// Settings

const app = express();
app.use(express.json());
app.use(cors());
app.set("PORT", process.env.PORT || 4000);

// Routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/area", areaRoutes);

// Server

app.listen(app.get("PORT"), () => {
  console.log("app escuchando en el puerto " + app.get("PORT"));
});
