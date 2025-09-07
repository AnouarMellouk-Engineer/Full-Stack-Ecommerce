import ProductCart from "./ProductCart";
import { useState, useEffect } from "react";

const ShopList = () => {
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
    <div className="flex  flex-wrap justify-between  items-stretch mt-7">
      {products.map((product) => (
        <>
          <ProductCart product={product} main={false} key={product.id} />
        </>
      ))}
    </div>
  );
};

export default ShopList;
