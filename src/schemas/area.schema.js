import z from "zod";

const levelEnum = ["low", "normal", "high"];

export const areaSchema = z.object({
  body: z.object({
    name: z.string().nonempty("El nombre del area es requerido!"),
    beds: z.number().min(1, "Minimo 1 cama en el area debe exister"),
    level: z.enum(levelEnum),
    schedule: z.string().nonempty("El horario no puede estar vacio"),
  }),
});
