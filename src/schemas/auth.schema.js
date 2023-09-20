import z from "zod";

const roleEnum = ["admin", "user"];
const genderEnum = ["male", "female", "other"];
const specializationEnum = [
  "cirugia",
  "pediatria",
  "ginecologia",
  "obstetricia",
  "cardiologia",
  "neurologia",
  "oftalmologia",
  "dermatologia",
  "otorrinolaringologia",
  "ortopedia",
  "psiquiatria",
  "anestesiologia",
  "radiologia",
  "urologia",
  "oncologia",
];
export const loginSchema = z.object({
  body: z.object({
    username: z
      .string()
      .nonempty("El nombre de usuario es requerido.")
      .min(
        6,
        "Se necesita un minimo de 6 caracteres para el nombre de usuario."
      ),
    password: z
      .string()
      .nonempty("La contraseña es requerida.")
      .min(6, "Se necesita un minimo de 6 caracteres para su contraseña."),
  }),
});

export const registerSchema = z.object({
  body: z.object({
    username: z
      .string()
      .nonempty("El nombre de usuario es requerido.")
      .min(
        6,
        "Se necesita un minimo de 6 caracteres para el nombre de usuario."
      ),
    password: z
      .string()
      .nonempty("La contraseña es requerida.")
      .min(6, "Se necesita un minimo de 6 caracteres para su contraseña."),
  }),
  fullname: z
    .string()
    .nonempty("El nombre completo es requerido.")
    .min(6, "Se necesita un minimo de 6 caracteres para el nombre de usuario."),
  gender: z.enum(genderEnum),
  dataOfBirth: z.date(),
  phone: z
    .string()
    .nonempty()
    .min(8, "Se necesita un minimo de 8 digitos para telefono."),
  specialization: z.enum(specializationEnum),
  role: z.enum(roleEnum),
});
