import "./App.css";
import Nav from "./Components/Nav";
import LandingList from "./Components/LandingList";
import CategorieList from "./Components/CategorieList";
import ProductsSection from "./Components/ProductsSection";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-neutral-background h-[500vh]">
        <div className="container pt-7 ">
          <LandingList />
          <CategorieList />
          <ProductsSection />
        </div>
      </div>
    </>
  );
}
export default App;
