import express from "express";
const router = express.Router();
import { verifyPAN, getPANInsights } from "../controllers/panController.js";
router.post("/verify", verifyPAN);
router.get("/insights/:pan", getPANInsights);
export default router;
