import React from "react";
import "./KorzinaCard.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
function KorzinaCard({ handleFunc }) {
  function Close() {
    handleFunc(false);
  }
  return (
    <div className="korzina-container">
      <div className="modal-content">
        <div className="modal-inner">
        <h2 className="korzina-paragraph">Саватча</h2>
          <div className="korzina-card">
            <p onClick={Close}>
              <IoIosCloseCircleOutline className="close-icon" />
            </p>
            
            <SlBasket className="basket-icon" /> <br/>
            <span className="text-1">Саватчада хозирда</span><br/>
            <span className="text-2">ҳеч нима йўқ</span><br/>
            <button className="buy-button">Харид қилиш</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KorzinaCard;
