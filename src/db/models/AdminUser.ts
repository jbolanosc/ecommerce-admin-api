import mongoose, { Schema, Document } from "mongoose";

export interface IAdminUser extends Document {
  email: string;
  password: string;
  temp_verification_code: string;
  role: string;
}

const adminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    temp_verification_code: { type: String },
  },
  {
    timestamps: true,
  }
);

const AdminUser = mongoose.model<IAdminUser>("AdminUser", adminUserSchema);

export default AdminUser;
