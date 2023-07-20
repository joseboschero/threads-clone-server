import { prisma } from "../../services";
import { comparePassword, signToken } from "../../utils";

export const userLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ((!username && !email) || !password)
      return res.status(406).json({ error: "Missing required fields" });

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await comparePassword(user.password, password);

    if (!match) return res.status(401).json({ error: "Wrong credentials" });

    const token = await signToken(user.id);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
