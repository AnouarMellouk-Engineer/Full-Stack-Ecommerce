import LandingList from "../Components/LandingList";
import CategorieList from "../Components/CategorieList";
import ProductsSection from "../Components/ProductsSection";
// import EventsSection from "./Components/EventsSection";
import BrandsSection from "../Components/BrandsSection";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  return (
    <>
      <div className="container pt-24 ">
        <LandingList />
        <CategorieList />
        <ProductsSection title="New Arrivals" />
        {/* <EventsSection /> */}
        <BrandsSection />
        <ProductsSection title="Promotional Products" />
      </div>
      <ContactSection />
    </>
  );
};

export default Home;
