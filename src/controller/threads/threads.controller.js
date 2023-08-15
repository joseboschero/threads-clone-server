import prisma from "../../services/database/database.connection";

export const getAllThreads = async (req, res) => {
  try {
    const data = await prisma.thread.findMany({
      where: {
        state: true,
      },
      select: {
        id: true,
        media: true,
        createdAt: true,
        description: true,
        likes: true,
        Replies: true,
        User: {
          select: {
            id: true,
            username: true,
            verified: true,
            image_url: true,
          },
        },
      },
    });

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

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
        createdAt: new Date(),
        state: true,
        User: {
          connect: {
            id: username.id,
          },
        },
        Replies: {
          create: {},
        },
      },
    });
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
