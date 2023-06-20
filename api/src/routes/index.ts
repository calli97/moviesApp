import express from "express";
import movieRoutes from "./movies";
import authRoutes from "./auth";

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/auth", authRoutes);

export default router;
