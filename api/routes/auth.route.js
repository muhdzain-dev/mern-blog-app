import express from "express";
import { signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signin", signIn);
export default router;
