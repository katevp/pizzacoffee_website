import React from "react";
import "./HistoryOrders.css";

const HistoryOrders = () => {
  return (
    <div className="history_orders">
      <h3 className="history_orders_title">История заказов</h3>
      <p className="history_orders_text">
        Последние 20 заказов за последние 90 дней
      </p>
      <div>
        <ul className="history_orders_list">
          <li className="history_orders_list_item ho_number_col ho_name_col">
            №
          </li>
          <li className="history_orders_list_item ho_time_col ho_name_col">
            Время заказа
          </li>
          <li className="history_orders_list_item ho_price_col ho_name_col">
            Сумма
          </li>
          <li className="history_orders_list_item ho_check_col ho_name_col">
            Чек
          </li>
        </ul>
        <ul className="history_orders_list">
          <li className="history_orders_list_item ho_number_col">2132</li>
          <li className="history_orders_list_item ho_time_col">
            23 апр. 2023 г., 22:02
          </li>
          <li className="history_orders_list_item ho_price_col">1 049 ₽</li>
          <li className="istory_orders_list_item ho_check_col">Посмотреть</li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryOrders;
