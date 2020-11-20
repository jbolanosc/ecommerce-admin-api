import Report from "../db/models/Report";
import { Request, Response } from "express";
import { successResponse, errorResponse } from "../common";

export const createReport = async (req: Request, res: Response) => {
  try {
    const { reporter, description, reported, status, inCharge } = req.body;
    const newReport = new Report({
      reporter,
      description,
      reported,
      status,
      inCharge,
    });

    await newReport.save();
    return res.send(successResponse("Report saved")).status(200);
  } catch (err) {
    return res.send(errorResponse(err.message)).status(500);
  }
};

export async function updateReport(req: Request, res: Response) {
  try {
    const { _id } = req.params;

    await Report.findByIdAndUpdate(_id, { $set: req.body }, { new: true });

    return res.json(successResponse("Report Updated!")).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function getReport(req, res) {
  try {
    const { _id } = req.params;

    const report = await Report.findById(_id);

    return res.json(successResponse(report)).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function deleteReport(req, res) {
  try {
    const { _id } = req.params;

    await Report.findByIdAndDelete(_id);

    const msg = "Report Deleted";

    return res.send(successResponse(msg)).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}
