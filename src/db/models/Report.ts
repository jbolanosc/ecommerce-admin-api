import mongoose, { Schema, Document } from "mongoose";

export interface IReport extends Document {
  _id: string;
  reporter: string;
  description: string;
  reported: string;
  status: number;
  inCharge: string;
}

const reportSchema = new Schema(
  {
    reporter: { type: String, required: true },
    reported: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Number, required: true },
    inCharge: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model<IReport>("Report", reportSchema);

export default Report;
