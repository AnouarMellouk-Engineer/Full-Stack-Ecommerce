import {
  Search,
  ShoppingBag,
  Heart,
  UserRoundPlus,
  ChevronDown,
} from "lucide-react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="  py-2 sm:py-4  shadow-md shadow-gray-300/60 fixed top-0 left-0 z-40 w-full bg-white  ">
      <div className="container flex justify-between sm:items-center ">
        <div className="flex flex-col justify-between sm:justify-normal gap-3.5 sm:flex-row flex-1 sm:flex-2">
          <h1 className="text-2xl text-primary font-bold  lg:text-3xl ">
            TechNova
          </h1>

          <form className="flex items-center px-1 bg-white py-1.5 rounded-md  mr-2.5 border border-neutral-200  sm:py-1  flex-1">
            <label htmlFor="search" className="cursor-pointer px-2 ">
              <Search className="text-gray-500" size={20} />
            </label>
            <input
              id="search"
              type="text"
              className="bg-white outline-none border-none placeholder-gray-400 text-sm py-1 w-full "
              placeholder="What are you Looking For ?"
            />
          </form>
        </div>
        <div className="flex flex-col-reverse justify-between items-start sm:flex-row sm:items-center sm:gap-4 lg:flex-1 sm:justify-end">
          <div className="flex items-center justify-start gap-6 mb-1.5  text-neutral-secondary sm:mb-0 sm:gap-4">
            <div className="cursor-pointer relative">
              <div className="rounded-full bg-alert-danger text-white flex items-center justify-center w-5 h-5  absolute top-[-8px] left-[-7px]">
                {" "}
                <p className="text-xs">41</p>
              </div>
              <ShoppingBag size={24} />
            </div>
            <div className="cursor-pointer relative">
              <Heart size={24} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* lang  */}
            <div className="flex items-center gap-1 lg:border-r-1 lg:border-neutral-border lg:pr-2 cursor-pointer">
              <div className="overflow-hidden ">
                <img
                  src="./src/assets/lang/icons8-usa-96.png"
                  alt=""
                  className="w-7 "
                />
              </div>
              <div className="flex items-center">
                <div className="hidden lg:block text-sm">English</div>
                <ChevronDown size={19} />
              </div>
            </div>
            {/* connect  */}
            <Link to="/auth" className="hidden lg:block text-sm  ">
              <div className="flex items-center lg:bg-neutral-background rounded-sm  lg:px-3 lg:py-2 cursor-pointer btn-hover  ">
                <div className="   ">
                  <UserRoundPlus size={24} />
                </div>{" "}
                <p> Connect</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
