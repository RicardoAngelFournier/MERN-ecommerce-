import Banner from "../Banner/Banner";
import Navbar1 from "../Navbar/Navbar";
import Products from "../Products/Products";
import Midbar from "../mid/mid";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <Banner />
      <Midbar />
      <div className="product-card-container">
        <Products />
      </div>
    </>
  );
};

export default Home;
