import React from "react";
import HistoryOrders from "../../components/HistoryOrders/HistoryOrders";
import EditIcon from "../../assets/icons/EditIcon";

const AccountPage = () => {
  return (
    <>
      <div>
        <h3 className="personal_data_title">Личные данные</h3>
        <form className="personal_data_form">
          <label className="label_input">
            <span className="label_input_text">Имя</span>
            <div className="label_input_area">
              <input
                name="phone"
                className="register_input personal_input"
                type="phone"
                placeholder="Екатерина"
              />
              <button className="edit_input_button">
                <EditIcon />
              </button>
            </div>
          </label>
          <label className="label_input">
            <span className="label_input_text">Номер телефона</span>
            <div className="label_input_area">
              <input
                name="phone"
                className="register_input personal_input disabled_input"
                type="phone"
                disabled
                placeholder="+7 904 822 13 75"
              />
            </div>
          </label>
          <label className="label_input">
            <span className="label_input_text">Электронная почта</span>
            <div className="label_input_area">
              <input
                name="phone"
                className="register_input personal_input"
                type="phone"
                placeholder=""
              />
              <button className="edit_input_button">
                <EditIcon />
              </button>
            </div>
          </label>
          <label className="label_input">
            <span className="label_input_text">День рождения</span>
            <div className="label_input_area">
              <input
                name="phone"
                className="register_input personal_input"
                type="phone"
                placeholder=""
              />
            </div>
          </label>
        </form>
        <div>
          <h3 className="personal_data_distribution_title">Ваши подписки</h3>
          <form className="personal_data_distribution">
            <label className="personal_data_label">
              <input className="input_checkbox" type="checkbox"></input>
              <span>
                Получать персональные предложения, скидки и акции на почту
              </span>
            </label>
            <span className="personal_data_text">
            Согласен на получение от ООО «ПИЦЦА И КОФЕ» (ОГРН 1225400004103) рекламных предложений по сетям электросвязи (SMS, push, email и другое)
              </span>
          </form>
        </div>
        <HistoryOrders />
        <div className="quit_area">
          <button className="button_submit_form button_quit">Выйти из аккаунта</button>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
