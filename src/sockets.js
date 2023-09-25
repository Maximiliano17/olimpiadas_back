import Area from "./models/area.model.js";

const sockets = (io) => {
  io.on("connection", (socket) => {
    socket.on("client:openAlarm", async (id) => {
      // let id = "650b6a314bdf4b36752883df";

      try {
        const updateAlarm = await Area.findByIdAndUpdate(id, { alarm: true });

        if (!updateAlarm) console.log("no se pudo activar la alarma");

        socket.broadcast.emit("server:reloadAlarm", true);

        console.log("Alarma activada");
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("client:closeAlarm", async (id) => {
      try {
        const updateAlarm = await Area.findByIdAndUpdate(id, { alarm: false });

        if (!updateAlarm) console.log("no se pudo activar la alarma");

        socket.broadcast.emit("server:reloadAlarm", false);

        console.log("Alarma desactivada");
      } catch (err) {
        console.log(err);
      }
    });
  });
};

export default sockets;
