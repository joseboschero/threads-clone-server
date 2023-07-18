import { prisma } from "../../services";
import { hashPassword } from "../../utils";

export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(406).json({ error: "All fields are required" });
    }

    const hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
