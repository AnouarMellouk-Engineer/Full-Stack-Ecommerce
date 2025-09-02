import { useState, useEffect } from "react";
import BrandCart from "./BrandCart";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await fetch("http://localhost:3000/brand");
        const data = await response.json();

        setBrands(data.brands);
      } catch (error) {
        console.log(error);
      }
    };
    getBrands();
  }, []);

  const BrandsList = brands.map(
    (brand: { id: string; name: string; image: string }) => (
      <BrandCart name={brand.name} image={brand.image} key={brand.id} />
    )
  );

  return (
    <div className="flex justify-center items-stretch gap-2.5 flex-wrap">
      {BrandsList}
    </div>
  );
};

export default BrandList;
