import express from "express";
import dotenv from "dotenv";
import { auth } from "./apis/v1/auth/routes";
import { jobs } from "./apis/v1/jobs/routes";
import { checkApiVersion } from "./middlewares";
import { apiVersions } from "./contants/api-versions";

const app = express();
dotenv.config();

const { PORT } = process.env;

app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/auth", checkApiVersion(apiVersions[0]), auth);
app.use("/api/v1/jobs", checkApiVersion(apiVersions[0]), jobs);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
