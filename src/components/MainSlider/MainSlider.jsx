// import React from 'react'
// import styles from './MainSlider.module.css'
import slider1 from "../../assets/images/grocery-banner-2.jpeg";
import slider2 from "../../assets/images/grocery-banner.png";
import slider3 from "../../assets/images/slider-image-1.jpeg";
import slider4 from "../../assets/images/slider-image-2.jpeg";
import slider5 from "../../assets/images/slider-image-3.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="flex flex-row gap-4">
          {" "}
          {/* Ensure it remains in row layout */}
          <div className="w-3/4">
            <Slider {...settings}>
              <img
                className="h-[300px] w-full object-cover"
                src={slider3}
                alt="Slider 1"
              />
              <img
                className="h-[300px] w-full object-cover"
                src={slider4}
                alt="Slider 2"
              />
              <img
                className="h-[300px] w-full object-cover"
                src={slider5}
                alt="Slider 3"
              />
            </Slider>
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <img
              className="h-[150px] w-full object-cover"
              src={slider1}
              alt="Ad 1"
            />
            <img
              className="h-[150px] w-full object-cover"
              src={slider2}
              alt="Ad 2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
