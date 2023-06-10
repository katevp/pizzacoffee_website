import React from "react";
import Basket from "../../components/Basket/Basket";

import EditIcon from "../../assets/icons/EditIcon";
import VisaIcon from "../../assets/icons/visa2.svg"
import SberIcon from "../../assets/images/sberpay.png"

const OrderPage = () => {
  return (
    <>
      <div className="order_page">
        <h3 className="personal_data_title order_title">Заказ на доставку</h3>
        <div className="order_block">
          <form className="personal_data_form order_form">
            <label className="label_input label_input_order">
              <span className="label_input_text">Имя</span>
              <div className="label_input_area">
                <input
                  name="phone"
                  className="register_input personal_input input_order"
                  type="phone"
                  placeholder="Екатерина"
                />
                <button className="edit_input_button">
                  <EditIcon />
                </button>
              </div>
            </label>
            <label className="label_input label_input_order">
              <span className="label_input_text">Номер телефона</span>
              <div className="label_input_area">
                <input
                  name="phone"
                  className="register_input personal_input input_order disabled_input"
                  type="phone"
                  disabled
                  placeholder="+7 904 822 13 75"
                />
              </div>
            </label>
            <label className="label_input label_input_order">
              <span className="label_input_text">Адрес доставки</span>
              <div className="label_input_area">
                <input
                  name="address"
                  className="register_input personal_input input_order"
                  type="address"
                  placeholder=""
                />
                <button className="edit_input_button">
                  <EditIcon />
                </button>
              </div>
            </label>
            <label className="label_input label_input_order">
              <span className="label_input_text">Время доставки</span>
              <div className="label_input_area label_input_order">
                <input
                  name="phone"
                  className="register_input personal_input input_order"
                  type="phone"
                  placeholder=""
                />
                <button className="edit_input_button">
                  <EditIcon />
                </button>
              </div>
            </label>
          </form>

          <Basket />
        </div>
        <div className="order_payments">
          <h3 className="personal_data_title order_title">Способы оплаты</h3>
          <ul className="order_payments_list">
            <li className="order_payments_list_item">
              <input className="button_choose" type="checkbox"></input>
              <img className="order_icon" src={VisaIcon} alt="img" />
              <p className="order_card_title">9888 •••• •••• 6777</p>
            </li>
            <li className="order_payments_list_item">
              <input className="button_choose" type="checkbox"></input>
              <img className="order_icon sber_icon" src={SberIcon} alt="img" />
              <p className="order_card_title">SberPay</p>
            </li>
            <li className="order_payments_list_item">
              <input className="button_choose" type="checkbox"></input>
              <p className="order_card_title">Картой на сайте</p>
            </li>
          </ul>
        </div>
        <button className="order-button-submit payment_button">Оформить заказ</button>
      </div>
    </>
  );
};

export default OrderPage;
