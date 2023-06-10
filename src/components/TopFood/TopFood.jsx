import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import "./TopFood.css";

import { topFoodList, foods } from "../../helper/foodList";

const TopFood = () => {
  return (
    <div className="registration topfood-section">
      <h2 className="topfood_title">Популярные блюда</h2>
      <ul className="topfood_list">
        {foods
          .filter((i) => topFoodList.includes(i.id))
          .map(
            ({ id, title, type, cost, image1, description, size }, index) => (
              <FoodCard
                id={id}
                key={index}
                name={title}
                type={type}
                cost={cost}
                image1={image1}
                description={description}
                size={size}
              />
            )
          )}
      </ul>
    </div>
  );
};

export default TopFood;
