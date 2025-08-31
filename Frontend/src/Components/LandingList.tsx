import LandingPage from "./LandingPage";

const LandingList = () => {
  return (
    <div className="mb-16">
      <div className="">
        <LandingPage />
      </div>

      <div className="mt-3 flex items-center justify-between  mx-2">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-secondary"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-secondary"></div>
        </div>
        <p className="text-primary text-lg ">see All</p>
      </div>
    </div>
  );
};

export default LandingList;
