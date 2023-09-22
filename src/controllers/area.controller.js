import res from "express/lib/response.js";
import Area from "../models/area.model.js";
import Patient from "../models/patient.model.js";

export const getAllAreas = async (req, res) => {
  try {
    const findAreas = await Area.find({});

    if (!findAreas) return res.status(401).json("No se encontraron areas");

    return res.status(200).json({ findAreas });
  } catch (err) {
    return res.json(err);
  }
};

export const getArea = async (req, res) => {
  const { id } = req.params;

  try {
    const findArea = await Area.findById(id);

    if (!findArea) return res.status(404).json("Area Not Found");

    return res.status(200).json({ findArea });
  } catch (error) {
    return res.json(error);
  }
};

export const createArea = async (req, res) => {
  const { name, beds, level, schedule } = req.body;

  try {
    const createArea = await Area.create({
      name,
      beds,
      level,
      schedule,
    });

    if (!createArea) return res.json("Area no Creada!");

    return res.json(createArea);
  } catch (error) {
    return res.json(error);
  }
};

export const updateArea = async () => {
  const { name, level, schedule } = req.body;
  const { id } = req.params;

  try {
    const updateFields = {};

    if (name) updateFields.name = name;
    if (level) updateFields.level = level;
    if (schedule) updateFields.schedule = schedule;

    const updateProfile = await User.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updateFields)
      return res.status(400).json("no se pudo actualizar el area");

    return res.status(200).json(updateFields);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePersonal = async (req, res) => {
  const { areaId, userId } = req.body;

  try {
    const area = await Area.findById(areaId);

    if (!area) {
      return res.status(404).json("Área no encontrada");
    }

    area.personal.push(userId);

    const updatedArea = await area.save();

    return res.status(200).json(updatedArea);
  } catch (error) {
    res.status(500).json(error);
  }

  res.json("actualizado");
};

export const updatePatient = async (req, res) => {
  const { areaId, patientId } = req.body;

  try {
    const area = await Area.findById(areaId);

    if (!area) {
      return res.status(404).json("Área no encontrada");
    }

    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json("Paciente no encontrado");
    }

    if (area.patients.length >= area.beds) {
      return res.status(400).json("Todas las camas están ocupadas");
    }

    area.patients.push(patientId);

    const updatedArea = await area.save();

    return res.status(200).json(updatedArea);
  } catch (error) {
    res.status(500).json(error);
  }

  res.json("actualizado");
};

export const deleteArea = async (req, res) => {
  const { id } = req.params;

  try {
    const findArea = await Area.findByIdAndDelete(id);

    if (!findArea) return res.status(402).json("no se pudo borrar el area");

    return res.status(200).json({ area: findArea });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deletePersonal = async (req, res) => {
  const { areaId, userId } = req.params;

  try {
    const area = await Area.findById(areaId);

    if (!area) {
      return res.status(404).json("Área no encontrada");
    }

    area.personal.pull(userId);

    const updatedArea = await area.save();

    return res.status(200).json(updatedArea);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePatient = async (req, res) => {
  const { areaId, patientId } = req.params;
  console.log("areaId: " + areaId);
  console.log("patientId: " + patientId);
  try {
    const area = await Area.findById(areaId);

    if (!area) {
      return res.status(404).json("Área no encontrada");
    }

    area.patients.pull(patientId);

    const updatedArea = await area.save();

    return res.status(200).json(updatedArea);
  } catch (error) {
    res.status(500).json(error);
  }
};
