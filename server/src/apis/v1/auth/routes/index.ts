import express from "express";
import {
  register,
  login,
  deleteAccount,
  forgotPassword,
  me,
} from "../controllers";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/delete-account", deleteAccount);
router.get("/me", me);

export { router as auth };
