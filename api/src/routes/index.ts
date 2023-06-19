import express from "express";

const router = express.Router();

router.get("/hello", (req, res, next) => {
    res.json({ msg: "hello world" });
});

export default router;
