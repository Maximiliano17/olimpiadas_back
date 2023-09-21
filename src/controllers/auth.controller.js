import User from "../models/auth.model.js";

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user)
      return res.status(400).json({ status: 400, message: "User Not Found." });

    const authPassword = await user.validatePassword(password);

    if (!authPassword)
      return res
        .status(400)
        .json({ status: 400, message: "Error Password Incorrect" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error (!)" });
  }
};

export const signup = async (req, res) => {
  const {
    username,
    password,
    gender,
    phone,
    specialization,
    role,
    dataOfBirth,
    fullname,
  } = req.body;

  try {
    const newuser = await User.create({
      username,
      fullname,
      password,
      gender,
      dataOfBirth,
      phone,
      specialization,
      role,
    });

    newuser.password = await newuser.encryptPassword(newuser.password);

    const savedUser = await newuser.save();

    if (!savedUser) return res.status(402).json("Error al crear usuario");

    return res.status(200).json({ user: newuser });
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getAllProfiles = async (req, res) => {
  try {
    const findUsers = await User.find({});

    if (!findUsers) return res.status(402).json("Error");

    return res.status(200).json({ users: findUsers });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const userFind = await User.findById(id);

    if (!userFind) return res.status(402).json("User Not Found");

    return res.status(200).json({ user: userFind });
  } catch (error) {
    return res.status(500).json("User Not Found Internal Error");
  }
};

export const deleteProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const userDelete = await User.findByIdAndDelete(id);

    if (!userDelete) return res.status(402).json("User Not Found");

    return res.status(200).json(userDelete);
  } catch (error) {
    return res.status(500).json("User Not Found");
  }
};

export const updateProfile = async (req, res) => {
  const { gender, phone, specialization, dataOfBirth, fullname } = req.body;
  const {id} = req.params;


  try {
    const updateFields = {};

    if (gender) updateFields.gender = gender;
    if (phone) updateFields.phone = phone;
    if (specialization) updateFields.specialization = specialization;
    if (fullname) updateFields.fullname = fullname;
    if (dataOfBirth) updateFields.dataOfBirth = dataOfBirth;

    const updateProfile = await User.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updateFields)
      return res.status(400).json("no se pudo actualizar el profile");

    return res.status(200).json(updateFields);
  } catch (error) {
    return res.status(500).json(error);
  }
};
