import bcrypt, { compare } from "bcrypt";

const comparePassword = async (password, candidatePassword) => {
  return await bcrypt.compare(candidatePassword, password);
};

export default comparePassword;
