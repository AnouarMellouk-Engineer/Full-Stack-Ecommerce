import { Router } from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
} from "./controller";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

router.put("/", updateProduct);

router.delete("/:id", deleteProductById);

export default router;
