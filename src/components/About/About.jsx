import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="topfood_title about_title">О нас</h2>
      <div className="about_section">
        <div className="about_wrapper_image">
          <img
            className="about_image"
            alt="restaurant"
            src="https://images.unsplash.com/photo-1641642396272-ac8adcafa6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
        <div className="about_section_text">
          <span className="about_span about_span_one">
            Food & Coffee Line - семейное современной кухни.
          </span>
          <br />
          <span className="about_span about_span_two">
            Еда, напитки, немного приятной музыки!
          </span>
          <br />
          <span className="about_span">
            Мы открылись совсем недавно, но все равно готовы предоставлять
            высокий уровень обслуживания и качества наших блюд.
          </span>
          <br />
          <span className="about_span">
            Наша миссия - вкусно накормить каждого гостя и показать ему лучшие
            блюда из различных стран мира. Мы предлагаем провести идеальные
            встречи с родными в окружении приятной музыки и вкусных блюд.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
