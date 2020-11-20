import mongoose, { Schema, Document } from "mongoose";

export interface IRequest extends Document {
  _id: number;
  description: string;
  type: string;
  status: boolean;
  seller: string;
  user: string;
}

const requestSchema = new Schema(
  {
    description: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    seller: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
