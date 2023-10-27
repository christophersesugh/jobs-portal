import express from "express";
import {
  getJobs,
  getJob,
  createJob,
  editJob,
  deleteJob,
  applyForJob,
} from "../controllers";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJob);
router.post("/create", createJob);
router.patch("/edit/:id", editJob);
router.get("/delete/:id", deleteJob);
router.post("/apply/:id", applyForJob);

export { router as jobs };
