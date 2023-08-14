import { prisma } from "../../services";

export const postThread = async (req, res) => {
  try {
    const { username, image, description } = req.body;

    if (!image || !description) {
      return res
        .status(406)
        .json({ error: "You must put a description or upload a image" });
    }
    const user = await prisma.thread.create({
      data: {
        description,
        media: image,
        userId: username,
      },
    });
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
