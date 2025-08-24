import express from "express";
import productsRoute from "./routes/products/index";
import categoriesRoute from "./routes/categories/index";
import usesRoute from "./routes/uses/index";
import discountsRoute from "./routes/Discounts";
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello worldd");
});

app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);
app.use("/uses", usesRoute);
app.use("/discounts", discountsRoute);

app.listen(port, () => {
  console.log("the server running on the port" + port);
});
