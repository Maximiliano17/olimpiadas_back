import Area from "../models/area.model.js";

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

export const updateArea = (req, res) => {
  res.send("update area");
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
