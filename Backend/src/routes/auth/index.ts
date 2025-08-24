import { Router } from "express";
import { logIn, logOut, register } from "./controller";

const router = Router();

router.post("/register", register);
router.post("/logIn", logIn);
router.get("/logOut", logOut);

export default router;
