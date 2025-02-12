import { servicesOne } from "@/data/servicesSection";
import React from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleServiceOne from "./SingleServiceOne";
import useActive from "@/hooks/useActive";
import Title from "../Reuseable/Title";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: "#service-carousel-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
};

const { tagline, title, services } = servicesOne;

const ServicesOneCarousel = ({id = "", hideTitle = false, serviceCount}) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="services-one">
      <Container>
      {!hideTitle && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Swiper {...options} className="thm-swiper__slider service-carousel">
          <div className="swiper-wrapper">
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <SingleServiceOne service={service} />
              </SwiperSlide>
            ))}
          </div>
          <div
            className="swiper-pagination swiper-pagination-styled"
            id="service-carousel-pagination"
          ></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default ServicesOneCarousel;
