import React from "react";

import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import TopFood from "../../components/TopFood/TopFood";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import About from "../../components/About/About";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import Contact from "../../components/Contact/Contact";

const MainPage = () => {
  return (
    <>
      <HeaderBanner />
      <TopFood />
      <FoodCategory type="coffee" />
      <About />
      <PaymentInfo />
      <Contact />
    </>
  );
};

export default MainPage;
