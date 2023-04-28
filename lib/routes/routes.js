import { Router } from "express";
import dogRoutes from "./dogs.js";

const router = Router();

router.get("/", (req, res) => res.send("PawMeets API!!"));
router.use("/dogs", dogRoutes);

export default router;