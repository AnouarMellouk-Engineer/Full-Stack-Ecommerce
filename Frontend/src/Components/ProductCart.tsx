const ProductCart = ({ product, main }) => {
  return (
    <div
      className={`border border-neutral-border bg-neutral-card rounded-2xl sm:w-[45%] ${
        main ? "lg:w-[24%]" : "lg:w-[32%]"
      } mb-5 duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col`}
    >
      {/* Product Image */}
      <div className="w-full overflow-hidden">
        <img
          src={`./src/assets/products/laptops/${
            product.images[0].path || "document_service_120104_698_5_1364713616"
          }.jpg`}
          alt="Laptop"
          className="w-full object-cover duration-300 hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="px-3 py-2 border-t border-neutral-border bg-neutral-background flex flex-col flex-1">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 overflow-hidden">
            <img
              src={`./src/assets/brands/${product.brand.image}.png`}
              alt={product.brand.name}
              className="w-full object-contain"
            />
          </div>
          <p className="text-lg font-semibold text-accent">
            {product.price} DA
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-md text-text-primary">{product.name}</p>
          <p
            className={`text-sm ${
              product.quantity < 15 ? "text-alert-info" : "text-secondary"
            }`}
          >
            {product.quantity < 15
              ? product.quantity + " left"
              : "available now"}
          </p>
        </div>
      </div>
      <div className="px-3 py-4 border-t border-neutral-border bg-neutral-background ">
        <div className="mb-2.5 flex justify-start items-start flex-wrap gap-1.5">
          <p className="text-xs text-neutral-secondary  px-1 py-1 rounded-xl bg-white">
            INTEl
          </p>
          <p className="text-xs px-1 text-neutral-secondary py-1 rounded-xl bg-white">
            motherboard
          </p>
        </div>
        <button className="px-4 py-2.5 rounded-md bg-primary text-white w-full hover:bg-primary-dark  cursor-pointer">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
