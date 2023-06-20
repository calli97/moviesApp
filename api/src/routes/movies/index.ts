import { Router } from "express";
import {
    getMovies,
    getMovie,
    postMovie,
    postMoviesFromFile,
} from "../../handlers/movieHandlers";

const router = Router();

router.get("/", getMovies);
router.get("/:movieid", getMovie);
router.post("/", postMovie);
router.post("/", postMoviesFromFile);

export default router;
