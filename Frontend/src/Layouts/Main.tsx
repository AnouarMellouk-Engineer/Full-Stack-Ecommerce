import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Nav />
      <div className="bg-neutral-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
