import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import alfa from "../../assets/alfa.jpeg"
import audi from "../../assets/audi.jpeg"
import maserati from "../../assets/maserati.jpeg"
import porsche from "../../assets/porsche.jpeg"
import street from "../../assets/street.jpeg"

export function Gallery() {

    return (
        <section id="gallery" className="py-20 overflow-hidden outline-none">
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pb-12"
            >
                <SwiperSlide key={index}>
                    <img
                        className="object-cover w-full h-96"
                        src={alfa}
                        alt={`Slide 1`}
                    />
                </SwiperSlide>
                <SwiperSlide key={index}>
                    <img
                        className="object-cover w-full h-96"
                        src={audi}
                        alt={`Slide 2`}
                    />
                </SwiperSlide>
                <SwiperSlide key={index}>
                    <img
                        className="object-cover w-full h-96"
                        src={maserati}
                        alt={`Slide 3`}
                    />
                </SwiperSlide>
                <SwiperSlide key={index}>
                    <img
                        className="object-cover w-full h-96"
                        src={porsche}
                        alt={`Slide 4`}
                    />
                </SwiperSlide>
                <SwiperSlide key={index}>
                    <img
                        className="object-cover w-full h-96"
                        src={street}
                        alt={`Slide 5`}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}