const BrandCart = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="px-14 py-1.5 rounded-md bg-neutral-card border-1 border-neutral-border flex flex-col justify-between  items-center cursor-pointer hover:shadow-md duration-300 ">
      <div className="overflow-hidden w-11">
        <img
          src={`./src/assets/brands/${image}.png`}
          alt=""
          className="w-full"
        />
      </div>
      <p className="text-neutral-secondary duration-300 hover:text-neutral-text">
        {name}
      </p>
    </div>
  );
};

export default BrandCart;
