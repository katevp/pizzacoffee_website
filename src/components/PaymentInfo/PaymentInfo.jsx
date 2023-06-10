import React from "react";
import "./PaymentInfo.css";

const PaymentInfo = () => {
  return (
    <div id="payment" className="payment_info">
      <h2 className="topfood_title payment_title">Условия доставки и оплаты</h2>
      <div className="payment_section">
        <h3 className="payment_title_two">Оплата</h3>
        <p className="contact_info_text">
          Картой онлайн* / Бонусными баллами/ Безналичный расчёт для
          корпоративных клиентов.
        </p>
        <p className="contact_info_text">
          *Оплата банковской картой при оформлении заказа через сайт (VISA,
          MASTERCARD, MAESTRO).
        </p>
        <img
          className="payment_image"
          src="https://lk.pult-oxpaha.ru:8443/img/content_visa-mastercard.png"
          alt="payment methods"
        />
        <p className="contact_info_text">
          Минимальная сумма для оформления заказа составляет 1000 руб. При этом
          доставка становится бесплатной
        </p>
      </div>
      <div className="payment_section">
        <h3 className="payment_title_two">Доставка</h3>
        <p className="contact_info_text">
          Доставка осуществляется в пределах 3 км. от ресторана
        </p>
        <p className="contact_info_text">
          Вы также можете заказать у нас с помощью агрегаторов еды - Яндекс.Еда
          и Delivery Club
        </p>
        <img
          className="payment_image"
          src="https://avatars.mds.yandex.net/get-lpc/1220100/d370f412-4ef7-4ab4-81c4-562cf0b8ba01/orig"
          alt="payment methods"
        />
        <p className="contact_info_text">
          Привезем заказ за 40-60 минут, в зависимости от загруженности кухни
        </p>
        <p className="contact_info_text">
          Доставка заказов действует с 10.00 до 22.00
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;
