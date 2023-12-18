import React from "react";
import DesktopHeader from "./Desktop/Header";
import MobileHeader from "./Mobile/MobileHeader";
import BannerCarusel from "../Carusel/BannerCarusel/BannerCarusel";
import BrandCarusel from "../Carusel/BrandCarusel/BrandCarusel";
function index() {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <BannerCarusel/>
      <BrandCarusel/>
    </div>
  );
}

export default index;
