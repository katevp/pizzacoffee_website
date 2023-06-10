import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import "./FoodCategory.css";

import { types, foods } from "../../helper/foodList";

const FoodCategory = ({ type, ...props }) => {
  const { title, id } =
    types.filter((food, index) => {
      return food.type === type;
    })[0] || {};

  if (!title || !id) return 404;

  return (
    <div id="menu" className="registration food_category_section" {...props}>
      <ul className="header_navigation_catalog_list">
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-coffee"
            to="/menu/coffee"
          >
            КОФЕ<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-juice"
            to="/menu/breakfast"
          >
            ЗАВТРАКИ<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-smoothies"
            to="/menu/grill"
          >
            ГРИЛЬ<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-cocktails"
            to="/menu/hot"
          >
            ГОРЯЧЕЕ<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-pizza"
            to="/menu/pizza"
          >
            ПИЦЦА<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-bakery"
            to="/menu/bakery"
          >
            ВЫПЕЧКА<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-salad"
            to="/menu/salad"
          >
            САЛАТЫ<div className="circle"></div>
          </Link>
        </li>
        <li className="header_navigation_catalog_item">
          <Link
            className="header_navigation_catalog_item-link catalog_item-link-dessert"
            to="/menu/desert"
          >
            ДЕСЕРТЫ<div className="circle"></div>
          </Link>
        </li>
      </ul>
      <h2 className="topfood_title">{title}</h2>
      <ul className="topfood_list">
        {foods
          .filter((food) => {
            return food.type === id;
          })
          .map(({ id, title, cost, image1, description, size }, index) => (
            <FoodCard
              id={id}
              key={index}
              name={title}
              cost={cost}
              image1={image1}
              description={description}
              size={size}
            />
          ))}
      </ul>
    </div>
  );
};

export default FoodCategory;
