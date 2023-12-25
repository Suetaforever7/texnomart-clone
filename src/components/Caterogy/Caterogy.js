import React from "react";
import "./Caterogy.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
function Caterogy() {
  return (
    <div className="Caterogy-Container">
      <h2 className="caterogy-text">Оммабоп категориялар</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/4/08aa7c9c-6fc4-4dd9-af79-669803f79f9a.svg"
            alt=""
          />
          <p>Смартфонлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/5/aea82075-5f5c-45fa-bac8-ad86b97bfe27.svg"
            alt=""
          />
          <p>Чангютгичлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/7/43e4d667-f026-484c-80a5-eebc1b128988.svg"
            alt=""
          />
          <p>Музлатгичлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/8/95eb09b2-df64-4827-9539-7596415851f9.webp"
            alt=""
          />
          <p>Ҳаво совутгичлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/22/4bdb1f78-afd4-4e21-84b8-704678fee731.webp"
            alt=""
          />
          <p>Ноутбуклар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/9/022df0cb-6560-4735-af2b-925057321911.svg"
            alt=""
          />
          <p>Телевизорлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/10/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg"
            alt=""
          />
          <p>Фенлар</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/11/ecd242c1-1ff2-4c5e-8e67-3fe7e2819b00.svg"
            alt=""
          />
          <p>Кир ювиш машиналари</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mini-io-api.texnomart.uz/catalog/special-category/6/b4f03ab9-a48d-4bd0-9e27-8bb8d5838036.svg"
            alt=""
          />
          <p>Планшетлар</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Caterogy;
