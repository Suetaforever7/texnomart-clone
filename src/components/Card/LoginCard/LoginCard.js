import React from "react";
import "./LoginCard.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
function LoginCard({ handleFunc }) {
  function Close() {
    handleFunc(false);
  }
  return (
    <div className="login-container">
      <div className="modal-content">
      <div className="modal-inner">
      <div className="login-card">
        <p onClick={Close}><IoIosCloseCircleOutline className="close-icon"/></p>
        <h2 className="paragraph">Кириш ёки рўйхатдан ўтиш</h2>
        <span className="text-inp">Телефон</span>
        <input type="text" autoComplete="phone" className="number-inp" />
        <button className="get-sms">Кодни олиш</button> <br/>
        <button className="sign-with-login">Логин орқали кириш</button>
      </div>
      </div>
      </div>


    </div>
  );
}

export default LoginCard;
