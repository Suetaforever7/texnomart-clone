import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { IoEarthOutline } from "react-icons/io5";
import LoginCard from "../../Card/LoginCard/LoginCard";
import Korzina from "../../Card/KorzinaCard/Korzina";
import DesktopMenu from "../../Menu/DesktopMenu";
import Bottomnavigation from "./Bottom-navigation";
// import ProductCarusel from "../../Carusel/ProductCarusel/ProductCarusel";
function Header() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(!open);
  }
  

  const [openLogin, setOpenLogin] = useState(false);
  function openLog() {
    setOpenLogin(!openLogin);
  }

  const [openKorzina, setOpenKorzina] = useState(false);
  function openKor() {
    setOpenKorzina(!openKorzina);
  }
  return (
    <>
    <div className="header-container">
      {/* Header-top start */}
      <div className="header-top">
        <ul>
          <li className="header-hover">
            <SlLocationPin color="#fff" fontSize={18} />
            Тошкент
            <ul className="header-top-scroll">
              <li>Toshkent</li>
              <li>Samarkand</li>
              <li>Bukhara</li>
              <li>Navai</li>
              <li>Jizzax</li>
              <li>Qashqadarya</li>
              <li>Chirchiq</li>
            </ul>
          </li>
          <div className="navigation-line">
            <li>Бизнинг дўконларимиз</li>
            <li className="header-top-li">Юридик шахслар учун</li>
            <li>Муддатли тўловга сотиб олиш</li>
            <li>Тўлов усуллари</li>
          </div>
        </ul>

        <div className="header-top-end">
          <ul>
            <li className="header-number">Aлоқа маркази : +99871 209 99 44</li>
            <li>
              <div className="language-container">
                <IoEarthOutline className="earth-icon" />
                <span className="language-name"> Узб</span>
                <ul className="language-choise">
                  <li>Рус</li>
                  <li>Uzb</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Header top end */}
      <div className="header-middle">
        <div className="header-middle-left">
          <h1>texnomart*</h1>
          {/* {open ? <span>Ochildi</span> : <span>Yopildi</span>} */}

          <button onClick={openMenu} className="header-katalog">
            Каталог
          </button>

          <div className="left-search">
            <BiSearch />
            <input type="text" placeholder="Поиск" className="header-search" />
          </div>
        </div>
        <div className="header-middle-right">
          <div className="header-icon-login" onClick={openLog}>
            <FaRegUser /> <br />
            <span>Кириш</span>
          </div>
          <div className="header-icon-heart">
            <FaRegHeart />
            <span>Севимлилар</span>
          </div>
          <div className="header-icon-basket" onClick={openKor}>
            <SlBasket />
            <span className="header-korzina">Саватча</span>
          </div>
        </div>
      </div>
      {/* <ProductCarusel/> */}
      {/* <div className="header-bottom">bottom header</div> */}
      {openLogin && <LoginCard handleFunc={setOpenLogin} />}
      {openKorzina && <Korzina handleFunc={setOpenKorzina} />}
      {openMenu && <DesktopMenu handleFunc={setOpen} />}
    </div>
    <Bottomnavigation/>
    </>
  );
}

export default Header;
