import Request from "../db/models/Request";
import { successResponse, errorResponse } from "../common";

export async function createRequest(req, res) {
  try {
    const newRequest = new Request({
      description: req.body.description,
      type: req.body.type,
      status: req.body.status,
      seller: req.body.seller,
      user: req.body.user,
    });

    await newRequest.save();

    return res.json(successResponse("Request Created!")).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function updateRequest(req, res) {
  try {
    const { _id } = req.params;

    await Request.findByIdAndUpdate(_id, { $set: req.body }, { new: true });

    return res.json(successResponse("Request Updated!")).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function getRequest(req, res) {
  try {
    const { _id } = req.params;

    const request = await Request.findById(_id);

    return res.json(successResponse(request)).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function deleteRequest(req, res) {
  try {
    const { _id } = req.params;

    await Request.findByIdAndDelete(_id);

    const msg = "Request Deleted!";
    return res.json(successResponse(msg)).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}
