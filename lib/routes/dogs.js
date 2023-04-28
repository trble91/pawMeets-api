import { Router } from "express";
import * as controllers from "../controllers/dogs.js";

const router = Router();

router.get("/", controllers.getDogs);
router.get("/:id", controllers.getDog);
router.post("/", controllers.createDog);
router.put("/:id", controllers.updateDog);
router.delete("/:id", controllers.deleteDog);

export default router;
