import express from "express";
import productsRoute from "./routes/products/index";
import categoriesRoute from "./routes/categories/index";
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello worldd");
});

app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);

app.listen(port, () => {
  console.log("the server running on the port" + port);
});

/*
Main Topics :
- work with 'tsc' and create 'tsconfig.json' file 
- datatypes (any , number ,boolean , string ,arrays , md arrays , void , never , unkown , undefined)  OK
- functions in ts OK
- type alias 'type' keyword with complex examples OK
- & and | operators OK
- tuples and enums OK
- OOP OK
- generics (class , function) OK
- advenced types (generics)
- as keyword
- Utility Types (built-in helpers)
- Modules & Namespaces (import and export)
- decorators

*/
