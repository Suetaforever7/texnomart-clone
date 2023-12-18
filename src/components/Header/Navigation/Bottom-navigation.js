import React from "react";
import "./Bottom-navigation.css";
function Bottomnavigation() {
  return (
    <div className="bottoom-navigation">
      <div className="bottom-navigation-container">
        <ul>
          <li>
            <a href="#">AКЦИЯЛАР</a>
          </li>
          <li>
            <a href="#" className="gif">
              <img src="https://texnomart.uz/_nuxt/img/low_prices_kr.5cabe3a.gif"></img>
            </a>
          </li>
          <li>
            <a href="#">Mazzza narxlar!</a>
          </li>
          <li>
            <a href="#">ХАВО СОВУТГИЧЛАР</a>
          </li>
          <li>
            <a href="">СМАРТФОНЛАР</a>
          </li>
          <li>
            <a href="#">МУЗЛАТГИЧЛАР</a>
          </li>
          <li>
            <a href="#">ЧАНГЮТКИЧЛАР</a>
          </li>
          <li>
            <a href="#">НОУТБУКЛАР</a>
          </li>
          <li>
            <a href="#">ТЕЛЕВИЗОРЛАР</a>
          </li>
          <li>
            <a href="#">БАРЧА КАТЕГОРИЯЛАР</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottomnavigation;
