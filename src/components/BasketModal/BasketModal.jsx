import React, { useState, useContext } from "react";
import "./BasketModal.css";
import { Context } from "../../App";
import { foods } from "../../helper/foodList";

const BasketModal = ({ closeModal }) => {
  const { cart, addToCart, delFromCart } = useContext(Context);

  const [_, _update] = useState(true);
  const update = () => {
    _update((u) => !u);
  };

  const totalPrice = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      const { id, quantity } = cart[i];
      const { cost } = foods.filter((i) => i.id === id)[0];

      total += Number(cost) * quantity;
    }

    return total;
  };

  return (
    <div className="basket_modal">
      <div className="basket_modal_block">
        <h3 className="basket_modal_title">Корзина заказа</h3>
        <div>
          <ul className="basket_modal_order_detail">
            {cart.map(({ id, quantity }, index) => {
              const { title, cost } = foods.filter((i) => i.id === id)[0];

              return (
                <li key={index} className="basket_modal_order_item">
                  <h4 className="order_item_title">{title}</h4>
                  <button
                    className="order-button order_item_button_remove"
                    onClick={() => {
                      delFromCart(id);
                      update();
                    }}
                  >
                    х
                  </button>
                  <p className="order_item_count">{quantity}</p>
                  <button
                    className="order-button order_item_button_add"
                    onClick={() => {
                      addToCart(id);
                      update();
                    }}
                  >
                    +
                  </button>
                  <p className="order_item_price">{cost} ₽</p>
                </li>
              );
            })}
          </ul>
          <ul className="basket_modal_order_detail-price">
            <li className="basket_modal_order_item basket_modal_order_item_all">
              <h4>Общая сумма заказа</h4>
              <p className="basket_price">{totalPrice()} ₽</p>
            </li>
            <li className="basket_modal_order_item basket_modal_order_item_all_price">
              <button
                className="order-button-submit"
                onClick={() => closeModal()}
              >
                Оформить заказ
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
