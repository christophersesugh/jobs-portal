import { Request, Response } from "express";

function register(req: Request, res: Response) {
  res.send("Hello register route");
}

function login(req: Request, res: Response) {
  res.send("Hello register route");
}

function deleteAccount(req: Request, res: Response) {
  res.send("Hello register route");
}

function forgotPassword(req: Request, res: Response) {
  res.send("Hello register route");
}

function me(req: Request, res: Response) {
  res.send("Hello register route");
}

export { register, login, deleteAccount, forgotPassword, me };
