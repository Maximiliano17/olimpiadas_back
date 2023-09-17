import Area from "../models/area.model.js";

export const getAllAreas = (req, res) => {
  res.send("get all areas");
};

export const getArea = (req, res) => {
  res.send("get area");
};

export const createArea = async (req, res) => {
  const { name, beds, level, personal } = req.body;

  try {
    const createArea = await Area.create({
      name,
      beds,
      level,
      personal,
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
