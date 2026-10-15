import { Router } from "express";
import { deleteFilm, getFilms, getFilmsWithID} from "../controllers/films.controller.js";



const router = Router();

router.get("/", getFilms);
router.get("/:id", getFilmsWithID)
//router.post("/",postFilm)
router.delete("/:id",deleteFilm)



export default router;