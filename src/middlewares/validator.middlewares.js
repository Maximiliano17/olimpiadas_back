import { ZodError } from "zod";

export const schemaValidation = (AnyZodObject) => (req, res, next) => {
  try {
    const schema = AnyZodObject;

    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({ message: "internal server error xd" });
  }
};
