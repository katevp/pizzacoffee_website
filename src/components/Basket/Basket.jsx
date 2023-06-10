import React from "react";
import "./Basket.css";

const Basket = () => {
  return (
    <div className="basket_section">
      <div className="basket_modal_block">
        <h3 className="basket_modal_title">Корзина заказа</h3>
        <div>
          <div className="basket_modal_my_order">
            <h3>Мой заказ</h3>
            <p className="basket_price">1010 ₽</p>
          </div>
          <ul className="basket_modal_order_detail">
            <li className="basket_modal_order_item">
              <h4 className="order_item_title">Бельгийские вафли</h4>
              <button className="order-button order_item_button_remove">
                х
              </button>
              <p className="order_item_count">1</p>
              <button className="order-button order_item_button_add">+</button>
              <p className="order_item_price">450 ₽</p>
            </li>
            <li className="basket_modal_order_item">
              <h4 className="order_item_title">Капучино</h4>
              <button className="order-button">х</button>
              <p>2</p>
              <button className="order-button">+</button>
              <p>280 ₽</p>
            </li>
            <li className="basket_modal_order_item">
              <h4 className="order_item_title">
                Салат из свежих овощей с морковным хумусом
              </h4>
              <button className="order-button">х</button>
              <p>1</p>
              <button className="order-button">+</button>
              <p>280 ₽</p>
            </li>
          </ul>
          <ul className="basket_modal_order_detail-price"></ul>
        </div>
      </div>
    </div>
  );
};

export default Basket;
