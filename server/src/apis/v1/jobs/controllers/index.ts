import { Request, Response } from "express";

function getJobs(req: Request, res: Response) {
  res.send("Hello jobs");
}

export { getJobs };
