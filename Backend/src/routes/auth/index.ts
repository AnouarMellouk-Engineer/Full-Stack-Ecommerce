import { Router } from "express";
import { logIn, logOut, me, register } from "./controller";

const router = Router();

router.post("/register", register);
router.post("/logIn", logIn);
router.get("/logOut", logOut);
router.get("/data", me);

export default router;
