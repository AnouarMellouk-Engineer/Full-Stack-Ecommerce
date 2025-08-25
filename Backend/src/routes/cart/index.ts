import { Router } from "express";
import { prisma } from "../products/controller";

const app = Router();

// Add product to cart
app.post("/", async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // initialize cart
    //@ts-ignore
    if (!req.session.cart) {
      //@ts-ignore
      req.session.cart = [];
    }

    // check if product exists in cart
    //@ts-ignore
    const existing = req.session.cart.find(
      (item: any) => item.id === product.id
    );

    if (existing) {
      existing.quantity += 1; // increase quantity
    } else {
      //@ts-ignore
      req.session.cart.push({ ...product, quantity: 1 });
    }
    //@ts-ignore
    return res.status(200).json({ cart: req.session.cart });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

// Get cart
app.get("/", (req, res) => {
  //@ts-ignore
  return res.status(200).json({ cart: req.session.cart || [] });
});

// Remove product from cart
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  //@ts-ignore
  req.session.cart = (req.session.cart || []).filter(
    (item: any) => item.id !== id
  );
  //@ts-ignore
  return res.status(200).json({ cart: req.session.cart });
});

export default app;
