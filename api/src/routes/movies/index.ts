import { Router } from "express";
import { getMovies, getMovie, postMovie } from "../../handlers/movieHandlers";

const router = Router();

router.get("/", getMovies);
router.get("/:movieid", getMovie);
router.post("/", postMovie);

export default router;
