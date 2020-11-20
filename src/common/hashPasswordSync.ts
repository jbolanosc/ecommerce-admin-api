import bcrypt from "bcrypt";

const hashPasswordSync = (password: string): string =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPasswordSync;
