import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = import.meta.glob("/src/assets/carousel/*");
export function Gallery() {
    const imageList = Object.values(images);

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
                {imageList.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="object-cover w-full h-96"
                            src={image.name}
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}