import express from "express";
import { Server } from "socket.io";
import http from "http";
import "./database.js";
import sockets from "./sockets.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import areaRoutes from "./routes/area.routes.js";
import patientRoutes from "./routes/patient.routes.js";

// Settings

const app = express();
app.use(express.json());
app.use(cors());
app.set("PORT", process.env.PORT || 4000);

// Routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/area", areaRoutes);
app.use("/api/v1/patient", patientRoutes);

// Server

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
sockets(io);

server.listen(app.get("PORT"), () => {
  console.log("app escuchando en el puerto " + app.get("PORT"));
});
