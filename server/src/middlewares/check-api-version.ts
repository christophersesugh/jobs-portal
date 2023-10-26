import { Request, Response, NextFunction } from "express";
import semver, { SemVer } from "semver";

function checkApiVersion(apiVersion: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    const requestVersion: string | undefined | SemVer = req.headers[
      "x-api-version"
    ] as string;
    if (semver.gte(requestVersion, apiVersion)) {
      return next();
    }
    return next("route");
  };
}

export { checkApiVersion };
