import BrandList from "./BrandList";

const BrandsSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-12 mt-24">
        <h2 className="text-xl font-bold   ">Shop By Brands</h2>
        <p className="text-primary text-lg">see All</p>
      </div>
      <BrandList />
    </div>
  );
};

export default BrandsSection;
