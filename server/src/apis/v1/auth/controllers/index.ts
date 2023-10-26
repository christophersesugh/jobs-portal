import { Request, Response } from "express";

function register(req: Request, res: Response) {
  res.send("Hello register route");
}

export { register };
