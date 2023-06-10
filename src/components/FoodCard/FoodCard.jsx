import React, { useContext } from "react";
import "./FoodCard.css";
import { Context } from "../../App";

const FoodCard = ({ id, image1, name, type, cost, description, size }) => {
  const { addToCart, setNotifyBar } = useContext(Context);
  return (
    <li className="food_card">
      <img className="food_card_image" src={image1} alt="wdwd" />
      <div className="food_card_text_information">
        <span className="food_card_name">{name}</span>
        <span className="food_card_about">{description}</span>
        <span className="food_card_size">{size}</span>
        <span className="food_card_price">{cost} ₽</span>
        <button
          className="food_card_button"
          onClick={() => {
            addToCart(id);
            setNotifyBar({
              type: "success",
              text: `Товар ${name} добавлен в корзину`,
            });
          }}
        >
          В КОРЗИНУ
        </button>
      </div>
    </li>
  );
};

export default FoodCard;
