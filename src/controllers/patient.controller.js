import Patient from "../models/patient.model.js";

export const signup = async (req, res) => {
  const { fullname, dni, phone, gender } = req.body;

  try {
    const createPatient = await Patient.create({
      fullname,
      dni,
      phone,
      gender,
    });

    const savedPatient = await createPatient.save();

    if (!savedPatient) return res.status(402).json("Error al crear paciente");

    return res.status(200).json({ patient: savedPatient });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const findPatients = await Patient.find({});

    if (!findPatients) return res.status(500).json("no se encontraron areas!");

    return res.status(200).json(findPatients);
  } catch (error) {
    return res.status(500).json(findPatients);
  }
};

export const getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const findPatient = await Patient.findById(id);

    if (!findPatient) return res.status(500).json("no se encontraron areas!");

    return res.status(200).json({findPatient});
  } catch (error) {
    return res.status(500).json(findPatient);
  }
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletePatient)
      return res.status(400).json("No se pudo borrar el paciente");

    return res.status(200).json(deletePatient);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePatient = async (req, res) => {
  const { fullname, dni, phone, gender } = req.body;
  const { id } = req.params;

  try {
    const updateFields = {};

    if (fullname) updateFields.fullname = fullname;
    if (dni) updateFields.dni = dni;
    if (phone) updateFields.phone = phone;
    if (gender) updateFields.gender = gender;

    const updateProfile = await Patient.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updateFields) return res.status(400).json("no se pudo actualizar el profile");

    return res.status(200).json(updateFields);
  } catch (error) {
    return res.status(500).json(error);
  }
};
