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

        // if(!findPatients) 

    } catch (error) {
        
    }
}