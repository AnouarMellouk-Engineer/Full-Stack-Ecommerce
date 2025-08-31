import { useState, useEffect } from "react";
import CategorieCard from "./CategorieCard";
const CategorieList = () => {
  type cat = {
    id: number;
    name: string;
    image: string;
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetch("http://localhost:3000/categories");
        const finalData = await data.json();

        setCategories(finalData.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-start md:justify-between    md:items-stretch">
      <div className="  flex flex-col justify-between  items-start">
        <h2 className="text-xl font-bold mb-11  ">Shop By Categorie</h2>
        <p className="hidden md:block text-primary text-lg ">see All</p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap md:w-2/3  md:justify-end">
        {categories.map((categorie: cat) => {
          return (
            <CategorieCard
              title={categorie.name}
              logo={categorie.image}
              key={categorie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategorieList;
