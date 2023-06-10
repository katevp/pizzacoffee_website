import React, { useEffect } from "react";

import "./Popup.css";

const Popup = ({ content, setPopup }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  // Функция закрытия по кнопке ESC

  const handleEscClose = (event) => {
    if (event.key === "Escape") {
      setPopup();
    }
  };

  // Функция закрытия по оверлею

  const handleOverlayClose = (event) => {
    if (event.target.classList.contains("popup")) {
      setPopup();
    }
  };

  return (
    <section
      className={`popup${content ? " popup_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className={`popup_container`}>
        <div className="popup_wrapper">
          <button
            className="popup_close_btn popup__btn-close_type_image"
            onClick={() => setPopup()}
          />
          {content
            ? React.cloneElement(content, { closeModal: () => setPopup() })
            : null}
        </div>
      </div>
    </section>
  );
};

export default Popup;
