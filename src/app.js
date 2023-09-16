import express from "express";
import "./database.js";
import authRoutes from "./routes/auth.routes.js";

// Settings

const app = express();
app.use(express.json());
app.set("PORT", process.env.PORT || 4000);

// Routes

app.use("/api/v1/auth", authRoutes);

// Server

app.listen(app.get("PORT"), () => {
  console.log("app escuchando en el puerto " + app.get("PORT"));
});
