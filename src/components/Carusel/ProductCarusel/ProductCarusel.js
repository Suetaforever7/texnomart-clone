

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductCarusel.css";
import ProductCard from "../../Card/ProductCard/ProductCard";

// import required modules

function ProductCarusel({ title, img }) {
  return (
    <div className="product_main">
      <h3>{title}</h3>
      <Swiper
        navigation={true}
        slidesPerView={1}
        autoplay={true}
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide>
            <ProductCard
            img={item.thumbnail}
            title={item.title}
            narx={item.price}
            id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ProductCarusel;