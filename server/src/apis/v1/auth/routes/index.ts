import express from "express";
import { register } from "../controllers";

const router = express.Router();

router.post("/auth/register", register);

export default router;
