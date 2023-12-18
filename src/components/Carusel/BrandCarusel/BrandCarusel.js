import "./BrandCarusel.css"
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
function BrandCarusel() {
  return (
    <div className="BrandCarusel">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
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
        className="mySwiper-brand"
      >
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/70/7160cc7e-711b-44bb-a6dc-77dca7ec4924.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/80/dd3aeb98-802f-4ddd-9d07-c1abd4b1a482-medium.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/73/9f3f6966-5f68-4bd1-a918-21f6f2c68f26.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/69/7cf53119-fae2-4da7-a479-88df9bd86d3a.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/89/409cc1aa-92c8-403e-96fc-f0e3dc15da92-medium.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/90/21a7fcd7-6ca4-4cd3-ade4-499ad6c96660-medium.webp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/75/cb377838-24b4-4c67-8efb-42f81678c320.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/81/8541e646-2b8a-40aa-95e1-d4147930533a-medium.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/82/21a6cb21-9bd1-4c03-80f0-ec9a32985113-medium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/85/b2eb3b33-9a84-4b37-80a4-421332d0c5fc-medium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/84/2f4d6f16-a2af-45bc-9993-82a0320e0630-medium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/91/e3cc7a21-1549-4aa5-b9d2-ba885a129e67-medium.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/93/2792adbb-db65-4295-a741-18c31c71b8ec-medium.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BrandCarusel;
