import React from "react";
import DesktopHeader from "./Desktop/Header";
import MobileHeader from "./Mobile/MobileHeader";
import BrandCarusel from "../Carusel/BrandCarusel/BrandCarusel";
import BannerCarusel from "../Carusel/BannerCarusel/BannerCarusel";
function Main() {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <BannerCarusel/>
      <BrandCarusel/>
    </div>
  );
}

export default Main;
