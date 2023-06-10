import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer_links">
      <div className="footer_links_left">
        <ul className="footer_links_left_list">
          <li className="footer_link_item footer_link_item_link item_link_title">
            Food & Coffee Line
          </li>
          <li className="footer_link_item">
            <a className="footer_link_item_link" href="22">
              О нас
            </a>
          </li>
          <li className="footer_link_item">
            <a className="footer_link_item_link" href="22">
              Вакансии
            </a>
          </li>
        </ul>
        <ul className="footer_links_left_list">
          <li className="footer_link_item footer_link_item_link item_link_title">
            Партнерам
          </li>
          <li className="footer_link_item">
            <a className="footer_link_item_link" href="22">
              Инвестиции
            </a>
          </li>
          <li className="footer_link_item">
            <a className="footer_link_item_link" href="22">
              Поставщикам
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_links_right">
        <ul className="footer_links_left_list">
          <li className="footer_link_item link-item-right item-number-phone">
            8 800 333-00-60
          </li>
          <li className="footer_link_item link-item-right">
            звонок бесплатный
          </li>
          <li className="footer_link_item link-item-right item-email">
            feedback@foodandcoffeeline.com
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_information">
      <ul className="footer_links_left_list">
        <li className="footer_link_item footer_link_item_link">© Food & Coffee Line.</li>
        <li className="footer_link_item footer_link_item_link">
          Ресторан и сервис по доставке готовой еды.
        </li>
      </ul>
      <ul className="footer_links_left_list">
        <li className="footer_link_item footer_link_item_link">Время работы</li>
        <li className="footer_link_item footer_link_item_link">с 10.00 до 22.00</li>
      </ul>
    </div>
    <div className="footer_helper">
      <div className="footer_helper_nav">
        <ul className="footer_helper_nav_list">
          <li className="footer_helper_nav_list_item">
            <a href="22" className="footer_link_item_link">Правовая информация</a>
            </li>
            <li className="footer_helper_nav_list_item">
              <a href="22" className="footer_link_item_link">Калорийность и состав</a>
            </li>
            <li className="footer_helper_nav_list_item">
              <a href="22" className="footer_link_item_link">Помощь</a>
            </li>
        </ul>
      </div>
      <div className="footer_helper_documents">
        <p className="footer_info_small">© 2023 ООО “ПИЦЦА И КОФЕ”</p>
        <p className="footer_info_small">ОГРН 1225400004103, ИНН 5402071032</p>
        <p className="footer_info_small">630105, обл. Новосибирская, г. Новосибирск, ул. Кропоткина, д. 203, эт. / помещ. 02/ 24,25</p>
      </div>
    </div>
  </div>
);

export default Footer;
