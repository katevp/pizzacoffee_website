import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_info">
      <h2 className="topfood_title payment_title contact_title">Контакты</h2>
      <div className="contact_info_section">
        <div className="contact_info_map">
          <iframe
            className="map_frame"
            title="map_frame_foodcoffeeline"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd100241ba9ac643c95f21c46cfe6c037d1fc39b3f36b2a45d4dc3c5307a5cda&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="contact_info_section_info">
          <h3>Контактная информация</h3>
          <p className="contact_info_text">
            Новосибирск, улица Кропоткина, дом 271, 1 этаж
          </p>
          <p>
            <a className="contact_info_text" href="number">
              +7 (490) 589-810-4
            </a>
          </p>
          <h4>Время работы:</h4>
          <p className="contact_info_text">
            понедельник - воскресенье 10.00 до 22.00
          </p>
          <p className="contact_info_text text_gray">ООО "Пицца и кофе"</p>
          <p className="contact_info_text text_gray">
            ИНН/КПП 5402071032/540201001
          </p>
          <p className="contact_info_text text_gray">
            Офис: Новосибирск, ул. Кропоткина, д. 203, эт. / помещ. 02/ 24,25
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
