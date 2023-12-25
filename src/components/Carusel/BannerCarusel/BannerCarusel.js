// import React from "react";

import "./BannerCarusel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
function BannerCarusel() {
  return (
    <div className="banner-main">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/45/jiRgSfZrxnHhdAI7QufzEawPAm1i96EG7FoTVxBL.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/71/jO4LwzIHEdxqCmS4zawwt9f3a6IyyCn7to2PYCxM.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/70/5mNZHDpiJ5zCMHzteZ8GTZ7QUJo928gkRpfPMCSG.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/65/PNEg4VApxq9nLs47vQVeQIiwF3MXR0fKQ0sEHRBb.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/66/0uSdzC5eMxsJ4dvTON2R9uQlJRf6W97TaDk5D0Ec.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/69/GsfMvg2S5VF4gF4RIXsPV0q8QTAW83blG8bZMtSO.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/slider/62/2LkadQIYxjW2GMHNF3uf7ponxevLYYJSFIEQWV0R.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCarusel;
