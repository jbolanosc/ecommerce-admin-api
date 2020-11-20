import bcrypt from "bcrypt";

const passwordCompareSync = (passwordToTest: string, passwordHash: string) =>
  bcrypt.compareSync(passwordToTest, passwordHash);

export default passwordCompareSync;
