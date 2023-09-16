import User from "../models/auth.model.js";

export const signin = (req, res) => {
  res.send("login");
};

export const signup = async (req, res) => {
  //   const { username, password, gender, phone, specialization, role } = req.body;

  try {
    const newuser = await User.create({
      username: "JuampaVLB",
      password: "Lucas1999",
      gender: "Masculino",
      dataOfBirth: new Date("1999-09-15"),
      phone: "1138929372",
      specialization: "pediatria",
      role: "admin",
    });

    if (!newuser) return res.status(402).json("Error al crear usuario");

    return res.status(200).json({ user: newuser });
  } catch (error) {
    return res.status(404).json(error);
  }
};
