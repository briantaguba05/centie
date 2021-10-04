import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { BtnLink } from "./HomeElements";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <h1>This is the HomePage</h1>
        <BtnLink to="/contactus">Contact Us</BtnLink>
        <BtnLink to="/privacy">Privacy Policy</BtnLink>

        <Footer />
      </div>
    </>
  );
};

export default Home;
