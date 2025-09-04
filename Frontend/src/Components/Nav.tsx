import {
  Search,
  ShoppingBag,
  Heart,
  UserRoundPlus,
  ChevronDown,
  UserRoundCog,
  LogOut,
  Settings,
  Truck,
} from "lucide-react";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const { user, setUser } = useAuth();
  const [show, setShow] = useState(false);

  const logOut = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logOut", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      alert(data.message);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="flex items-center gap-5 relative">
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
            {/* connect  | Profile */}
            {user ? (
              <div>
                <div
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="flex items-center justify-center gap-2 hover:bg-gray-100 py-1.5 px-1 rounded-md cursor-pointer duration-300 "
                >
                  <p className="rounded-full  w-9 h-9 text-sm flex justify-center items-center ">
                    {/* {user.firstName[0] + "" + user.firstName[1]} */}
                    <UserRoundCog size={24} />
                  </p>
                  <div className="hidden lg:block">
                    <p className="text-xs text-neutral-secondary ">welcom</p>
                    {/* <p className="text-sm font-bold">{user.firstName}</p> */}
                    <p className="text-sm font-bold">name</p>
                  </div>
                  <ChevronDown size={19} className="hidden lg:block" />
                </div>
                <div
                  className={`absolute top-28 sm:top-20  border-1 border-neutral-border bg-neutral-card z-50 left-0 py-3 px-2 sm:px-4 rounded-md w-full ${
                    show ? "flex" : "hidden"
                  } flex-col justify-start items-start gap-5 `}
                >
                  <div className="flex items-center justify-start gap-1.5 sm:gap-3 text-neutral-secondary hover:text-black duration-300 cursor-pointer">
                    <Truck size={19} />
                    <p>Orders</p>
                  </div>
                  <div className="flex items-center justify-start gap-1.5 sm:gap-3 text-neutral-secondary hover:text-black duration-300 cursor-pointer">
                    <Settings size={19} />
                    <p>Settings</p>
                  </div>

                  <div
                    className="flex items-center justify-start gap-1.5 sm:gap-3 text-neutral-secondary hover:text-black duration-300 cursor-pointer "
                    onClick={logOut}
                  >
                    <LogOut size={19} />
                    <p>Log out</p>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="hidden lg:block text-sm  ">
                <div className="flex items-center lg:bg-neutral-background rounded-sm  lg:px-3 lg:py-2 cursor-pointer btn-hover  ">
                  <div className="   ">
                    <UserRoundPlus size={24} />
                  </div>{" "}
                  <p> Connect</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
