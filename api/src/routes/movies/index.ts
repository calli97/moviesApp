import { Router } from "express";
import {
    getMovies,
    getMovie,
    postMovie,
    postMoviesFromFile,
} from "../../handlers/movieHandlers";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/", getMovies);
router.get("/:movieid", getMovie);
router.post("/", postMovie);
router.post("/csv", upload.single("csvFile"), postMoviesFromFile);

export default router;
