import React from "react";
import "./Bottom-navigation.css";
function Bottomnavigation() {
  return (
    <div className="bottoom-navigation">
      <div className="bottom-navigation-container">
        <ul>
          <li>AКЦИЯЛАР</li>
          <li className="gif">
            <img
              src="https://texnomart.uz/_nuxt/img/low_prices_kr.5cabe3a.gif"
              alt=""
            />
          </li>
          <li>Mazzza narxlar!</li>
          <li>ХАВО СОВУТГИЧЛАР</li>
          <li>СМАРТФОНЛАР</li>
          <li>МУЗЛАТГИЧЛАР</li>
          <li>ЧАНГЮТКИЧЛАР</li>
          <li>НОУТБУКЛАР</li>
          <li>ТЕЛЕВИЗОРЛАР</li>
          <li>БАРЧА КАТЕГОРИЯЛАР</li>
        </ul>
      </div>
    </div>
  );
}

export default Bottomnavigation;
