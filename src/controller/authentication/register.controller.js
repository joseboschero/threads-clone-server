import { prisma } from "../../services";
import { hashPassword } from "../../utils";

export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(406).json({ error: "All fields are required" });
    }

    const hash = await hashPassword(password);

    const isCreated = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
      select: {
        id: true,
      },
    });

    if (!isCreated) {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hash,
        },
      });
      return res.status(201).json({ user });
    } else {
      return res.status(400).send({ error: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
