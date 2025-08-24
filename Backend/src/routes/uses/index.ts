import { Router } from "express";
import { addUses, getUses } from "./controller";

const app = Router();

app.get("/", getUses);
app.post("/", addUses);

export default app;
