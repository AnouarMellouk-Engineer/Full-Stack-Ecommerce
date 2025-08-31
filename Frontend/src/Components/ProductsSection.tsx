import ProductCart from "./ProductCart";
import { useState, useEffect } from "react";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        let data = await response.json();
        data = data.products.filter((p, index: number) => index < 4);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);
  return (
    <div className="mt-40">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-xl font-bold   ">New Arrivals</h2>
        <p className="text-primary text-lg">see All</p>
      </div>
      <div className="flex items-stretch justify-between flex-wrap">
        {products.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
