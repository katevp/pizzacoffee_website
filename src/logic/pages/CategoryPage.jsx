import React from "react";
import { useParams } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import TopFood from "../../components/TopFood/TopFood";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import About from "../../components/About/About";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import Contact from "../../components/Contact/Contact";

const CategoryPage = () => {
  const params = useParams();
  return (
    <>
      <HeaderBanner />
      <TopFood />
      <FoodCategory type={params.category} id="category" />
      <About />
      <PaymentInfo />
      <Contact />
    </>
  );
};

export default CategoryPage;
