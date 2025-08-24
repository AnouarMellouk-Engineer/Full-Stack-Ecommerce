import { Router } from "express";
import { getCategories, addCategorie } from "./controller";

const app = Router();

app.get("/", getCategories);
app.post("/", addCategorie);

export default app;
