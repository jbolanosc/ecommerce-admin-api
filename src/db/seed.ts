import AdminUser from "./models/AdminUser";
import { hashPasswordSync } from "../common";
export default function seed() {
  const user = {
    email: "josuebolanos2@raccoonLabs.com",
    password: hashPasswordSync("nana12"),
    temp_verification_code: "none",
    role: "admin",
  };

  AdminUser.create(user, (e) => {
    if (e) throw e;
    console.log("User created");
  });
}
