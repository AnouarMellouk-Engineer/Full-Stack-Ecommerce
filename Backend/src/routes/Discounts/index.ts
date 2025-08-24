import { Router } from "express";
import { getDiscounts, addDiscount, deleteDiscount } from "./controller";

const app = Router();

app.get("/:productId", getDiscounts);
app.post("/", addDiscount);
app.delete("/:id", deleteDiscount);

export default app;
