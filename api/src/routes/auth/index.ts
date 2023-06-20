import { Router } from "express";
import { signIn, signUp } from "../../handlers/userHandlers";

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
