import React, { useEffect, useRef } from "react";
import "./NotificationBar.css";

const NotificationBar = ({ type, text, onClose }) => {
  const to = useRef();

  // Запись в useState обновляет компонент, а в useRef не обновляет компонент
  // current - это запись в собственное поле объекта useRef
  useEffect(() => {
    to.current = setTimeout(() => onClose(), 4000);

    return () => clearTimeout(to.current);
  }, [type, onClose]);

  return (
    <>
      {text && type ? (
        <section className="notify_bar_info">
          <div
            className={
              type === "notify_bar_error"
                ? "notify_bar_notice_error"
                : "notify_bar_notice"
            }
          >
            <span className="notify_bar_notice_text">{text}</span>
            <span
              className="notify_bar_notice_close_btn"
              title="Закрыть"
              onClick={onClose}
            >
              ×
            </span>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default NotificationBar;
