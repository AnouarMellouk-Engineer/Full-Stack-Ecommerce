import "./App.css";
import Nav from "./Components/Nav";
import LandingList from "./Components/LandingList";
import CategorieList from "./Components/CategorieList";
import ProductsSection from "./Components/ProductsSection";
// import EventsSection from "./Components/EventsSection";
import BrandsSection from "./Components/BrandsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-neutral-background">
        <div className="container pt-7 ">
          <LandingList />
          <CategorieList />
          <ProductsSection title="New Arrivals" />
          {/* <EventsSection /> */}
          <BrandsSection />
          <ProductsSection title="Promotional Products" />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
export default App;
