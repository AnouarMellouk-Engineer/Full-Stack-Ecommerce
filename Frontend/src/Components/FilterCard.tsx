// import FilterSection from "./FilterSection";
// import { ChevronDown } from "lucide-react";
// const FilterCard = () => {
//   return (
//     <div className="fixed top-0 left-0 z-50 w-full ">
//       <div className="bg-white px-5 py-3 border-1 border-neutral-border rounded-md  absolute top-0 left-0 z-50 w-full  flex flex-col justify-between items-stretch">
//         {/* <h2 className="text-center font-bold text-lg  ">Filter</h2> */}
//         <FilterSection
//           title="Categories"
//           opt={["Phones", "Laptops", "Monitors", "Electronics"]}
//         />

//         <div>
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="font-semibold text-lg">Brands</h3>
//             <ChevronDown />
//           </div>

//           <input
//             type="text"
//             className="inputfield w-full mb-2"
//             placeholder="Search Brand ..."
//           />
//           <ul className="flex flex-col justify-start items-start gap-3.5">
//             {[
//               { name: "Apple", icon: "icon" },
//               { name: "Apple", icon: "icon" },
//               { name: "Apple", icon: "icon" },
//               { name: "Apple", icon: "icon" },
//             ].map((brand) => (
//               <li className="flex justify-between items-center ">
//                 <div className="flex justify-start items-center gap-1.5">
//                   <div className="w-9 overflow-hidden ">
//                     <img src="./src/assets/brands/dell.png" alt="" />
//                   </div>

//                   <p>{brand.name}</p>
//                   <p className="text-sm text-neutral-secondary">{143}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="font-semibold text-lg">Price</h3>
//             <ChevronDown />
//           </div>
//           <ul className="flex flex-col justify-start items-start gap-4">
//             {[
//               "under 1000 DA",
//               "1000 - 5000 DA",
//               "5000 - 10000 DA",
//               "above 10000 DA",
//             ].map((label, index) => (
//               <li key={index} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="price" // same name for grouping
//                   id={`price-${index}`} // unique id for label binding
//                 />
//                 <label htmlFor={`price-${index}`}>{label}</label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <FilterSection
//           title="Categories"
//           opt={["Phones", "Laptops", "Monitors", "Electronics"]}
//         />

//         <button className="px-4 py-2.5  rounded-md bg-primary text-white w-full hover:bg-primary-dark  cursor-pointer">
//           Filter Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilterCard;

import FilterSection from "./FilterSection";
import { ChevronDown } from "lucide-react";

const FilterCard = ({ filter, setFilter }) => {
  return (
    <div
      className={` ${
        filter ? "" : "hidden"
      } md:block fixed md:sticky md:top-[-270px] md:mb-5 top-0 left-0 z-50 md:z-0 w-full h-full md:h-auto bg-white md:flex-1`}
    >
      <div className=" py-3 border border-neutral-border rounded-md w-full h-full flex flex-col ">
        {/* Scrollable content */}
        <div className="px-5 flex-1 overflow-y-auto space-y-6">
          <FilterSection
            title="Categories"
            opt={["Phones", "Laptops", "Monitors", "Electronics"]}
          />

          {/* Brands */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">Brands</h3>
              <ChevronDown />
            </div>

            <input
              type="text"
              className="inputfield w-full mb-2"
              placeholder="Search Brand ..."
            />

            <ul className="flex flex-col justify-start items-start gap-3.5">
              {[
                { name: "Apple", icon: "icon" },
                { name: "Dell", icon: "icon" },
                { name: "Samsung", icon: "icon" },
                { name: "HP", icon: "icon" },
              ].map((brand, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex justify-start items-center gap-1.5">
                    <div className="w-9 overflow-hidden">
                      <img src="./src/assets/brands/dell.png" alt="" />
                    </div>
                    <p>{brand.name}</p>
                    <p className="text-sm text-neutral-secondary">{143}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">Price</h3>
              <ChevronDown />
            </div>
            <ul className="flex flex-col justify-start items-start gap-4">
              {[
                "under 1000 DA",
                "1000 - 5000 DA",
                "5000 - 10000 DA",
                "above 10000 DA",
              ].map((label, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="radio" name="price" id={`price-${index}`} />
                  <label htmlFor={`price-${index}`}>{label}</label>
                </li>
              ))}
            </ul>
          </div>

          <FilterSection
            title="Categories"
            opt={["Phones", "Laptops", "Monitors", "Electronics"]}
          />
        </div>

        {/* Footer button */}
        <div className="mt-4 mx-5">
          <button
            onClick={setFilter}
            className="px-4 py-2.5 rounded-md bg-primary text-white w-full hover:bg-primary-dark cursor-pointer"
          >
            Filter Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
