import { ChevronRight } from "lucide-react";
import FilterCard from "../Components/FilterCard";
import ShopList from "../Components/ShopList";
import { useState } from "react";
const Shop = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div className="pt-16 ">
      <div className="w-full flex justify-center items-center bg-black text-white text-2xl h-72 mb-12">
        shop now
      </div>
      <div className="container ">
        <div className="text-center mb-3 md:text-left ">
          <div className="mb-2 flex justify-center md:justify-start items-center gap-2 ">
            <p> Home </p>
            <ChevronRight size={19} />
            <p>Laptops</p>
          </div>
          <p className="text-lg font-bold">Found 34 Items</p>
        </div>

        <div className="mb-8 flex items-start gap-16">
          <FilterCard
            filter={filterShow}
            setFilter={() => {
              setFilterShow(false);
            }}
          />
          <div className="flex-2">
            <div className="py-2 border-b-2  border-neutral-border flex justify-between items-center">
              <div className="flex items-center gap-5">
                <p>show</p>{" "}
                <p
                  className="md:hidden cursor-pointer"
                  onClick={() => {
                    console.log("true");
                    setFilterShow(true);
                  }}
                >
                  Filter
                </p>
              </div>
              <div>sorted by</div>
            </div>

            <ShopList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
