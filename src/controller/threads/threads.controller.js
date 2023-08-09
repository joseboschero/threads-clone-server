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
