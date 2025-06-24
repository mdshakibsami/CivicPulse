import React from "react";
import Banner from "../../components/home/Banner";
import Gallery from "../../components/home/Gallary";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/shared/Footer/Footer";
import Feature from "../../components/home/Feature";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
