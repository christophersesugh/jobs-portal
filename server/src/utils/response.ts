import { Response } from "express";

function response(
  res: Response,
  {
    data,
    error,
    message,
    statusCode,
  }: {
    data: any | null;
    error: string | null;
    message: string | null;
    statusCode: number;
  },
) {
  return res.status(statusCode).json({ data, error, message });
}

export { response };
