import { Request, Response } from "express";
import { response } from "~/utils/response";
import { StatusCodes } from "http-status-codes";

function getJobs(req: Request, res: Response) {
  const numbers = [1, 2, 3, 4, 5];
  return response(res, {
    data: numbers,
    message: null,
    error: null,
    statusCode: StatusCodes.OK,
  });
}

function getJob(req: Request, res: Response) {
  res.send("Hello single job");
}

function createJob(req: Request, res: Response) {
  res.send("Hello jobs");
}

function editJob(req: Request, res: Response) {
  res.send("Hello jobs");
}

function deleteJob(req: Request, res: Response) {
  res.send("Hello delete jobs");
}

function applyForJob(req: Request, res: Response) {
  res.send("Hello jobs");
}

export { getJobs, getJob, createJob, editJob, deleteJob, applyForJob };
