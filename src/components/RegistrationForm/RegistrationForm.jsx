import React, { useState, useContext } from "react";
import "./RegistrationForm.css";
import validator from "validator";
import CountDown from "../CountDown";
import { Context } from "../../App";

const RegistrationForm = () => {
  const [validPhone, setValidPhone] = useState(true);
  const [validCode, setValidCode] = useState(true);
  const [activeCode, setActiveCode] = useState(true);

  const { setNotifyBar } = useContext(Context);

  return (
    <div className="registration">
      <form
        name="register"
        onSubmit={(e) => {
          e.preventDefault();
          setNotifyBar({ type: "success", text: "Вы успешно вошли" });
        }}
        className="register_form"
      >
        <h2 className="register_title">Авторизация</h2>
        <input
          name="phone"
          className={
            "register_input input_field_phone" +
            (!validPhone ? " field_error" : "")
          }
          placeholder="Номер телефона"
          type="tel"
          onChange={(e) => {
            if (validator.isMobilePhone(e.target.value, ["ru-RU"])) {
              setValidPhone(true);
            } else {
              setValidPhone(false);
            }
          }}
        />
        <span className="form_error">
          {!validPhone ? "Недопустимый формат номера телефона!" : ""}&nbsp;
        </span>
        <div className="form_sms_code">
          <button
            className="button_submit_code"
            disabled={!activeCode}
            onClick={(e) => {
              e.preventDefault();
              setActiveCode(false);
            }}
          >
            Отправить SMS-код
          </button>
          {!activeCode ? (
            <CountDown
              className="info_sms_code_time"
              time={60}
              onEnd={() => setActiveCode(true)}
            />
          ) : null}
        </div>
        <input
          name="smscode"
          className={
            "register_input input_field_smscode " +
            (!validCode ? " field_error" : "")
          }
          type="sms"
          onChange={(e) => {
            if (
              validator.isInt(e.target.value) &&
              e.target.value.length === 4
            ) {
              setValidCode(true);
            } else {
              setValidCode(false);
            }
          }}
          placeholder="SMS-код"
        />
        <span className="form_error">
          {!validCode ? "SMS-код неверен!" : ""}&nbsp;
        </span>
        <button type="submit" className="button_submit_form">
          Войти
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
