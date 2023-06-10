import React, { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CartBuyIcon from "../../assets/icons/CartBuyIcon";
import GeolocationIcon from "../../assets/icons/GeolocationIcon";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import SunThemeIcon from "../../assets/icons/SunThemeIcon";
import { Context } from "../../App";
import BasketModal from "../BasketModal/BasketModal";

import { HashLink } from "react-router-hash-link";

const Header = ({ cartLength }) => {
  const { setPopup } = useContext(Context);
  return (
    <div className="header">
      <div className="header_functional">
        <div className="header_choose_region">
          <button className="choose_region_button">
            <GeolocationIcon />
            ВАШ АДРЕС
            <ChevronDownIcon />
          </button>
        </div>
        <div className="header_functional_buttons">
          <button
            className="cartbuy_button"
            onClick={() => setPopup(<BasketModal />)}
          >
            КОРЗИНА ({cartLength}) <CartBuyIcon />
          </button>
          <Link to="/register" className="authing_button">
            ВОЙТИ
          </Link>
          <button className="suntheme_button">
            <SunThemeIcon />
          </button>
        </div>
      </div>
      <div className="header_navigation">
        <div className="header_navigation_catalog">
          <ul className="header_navigation_catalog_list">
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/coffee#category"
                className="header_navigation_catalog_item-link catalog_item-link-coffee"
              >
                КОФЕ
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/breakfast#category"
                className="header_navigation_catalog_item-link catalog_item-link-juice"
              >
                ЗАВТРАКИ
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/grill#category"
                className="header_navigation_catalog_item-link catalog_item-link-smoothies"
              >
                ГРИЛЬ
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/hot#category"
                className="header_navigation_catalog_item-link catalog_item-link-cocktails"
              >
                ГОРЯЧЕЕ
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/pizza#category"
                className="header_navigation_catalog_item-link catalog_item-link-pizza"
              >
                ПИЦЦА
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/bakery#category"
                className="header_navigation_catalog_item-link catalog_item-link-bakery"
              >
                ВЫПЕЧКА
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/salad#category"
                className="header_navigation_catalog_item-link catalog_item-link-salad"
                href="22"
              >
                САЛАТЫ
                <div className="circle" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item">
              <HashLink
                smooth
                to="/menu/desert#category"
                className="header_navigation_catalog_item-link catalog_item-link-dessert"
                href="22"
              >
                ДЕСЕРТЫ
                <div className="circle" />
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="header_navigation_nav">
          <ul className="header_navigation_catalog_list catalog_list-func">
            <li className="header_navigation_catalog_item catalog_item-func">
              <Link
                to="/"
                className="header_navigation_catalog_item-link link-black"
                href="232"
              >
                ГЛАВНАЯ
                <div className="circle circle-white-black" />
              </Link>
            </li>
            <li className="header_navigation_catalog_item catalog_item-func">
              <HashLink
                className="header_navigation_catalog_item-link link-black"
                to="/#about"
              >
                О НАС
                <div className="circle circle-white-black" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item catalog_item-func">
              <HashLink
                className="header_navigation_catalog_item-link link-black"
                to="/#menu"
              >
                МЕНЮ
                <div className="circle circle-white-black" />
              </HashLink>
            </li>
            <li className="header_navigation_catalog_item catalog_item-func">
              <HashLink
                className="header_navigation_catalog_item-link link-black"
                to="/#payment"
              >
                ОПЛАТА И ДОСТАВКА
                <div className="circle circle-white-black" />
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
