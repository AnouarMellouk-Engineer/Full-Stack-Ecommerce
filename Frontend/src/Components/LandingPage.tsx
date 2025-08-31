const LandingPage = () => {
  return (
    <>
      <div className="relative h-[80vh] mt-4 rounded-2xl overflow-hidden bg-[url('./src/assets/laptop.jpg')] bg-center bg-cover text-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content goes above overlay */}
        <div className="relative z-10  flex justify-end  pr-5 items-center  h-full ">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-7">
              Powerful PCs for Work & Play
            </h2>
            <p className="text-lg">
              Discover high-performance laptops and desktops built to handle
              everything from gaming marathons to professional workloads.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
