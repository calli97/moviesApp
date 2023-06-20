import express from "express";
import movieRoutes from "./movies";
import authRoutes from "./auth";

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/auth", authRoutes);

router.get("/hello", (req, res, next) => {
    res.json({ msg: "hello world" });
});

export default router;
