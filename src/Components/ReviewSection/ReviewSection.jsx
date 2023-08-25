import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ReviewPreview from "./ReviewPreview";
const ReviewSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("./Comments.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);
  const chunkArray = (arr, size) => {
    return arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );
  };

  const testimonialChunks = chunkArray(testimonials, 3);
  return (
    <div className="mySwiper w-11/12 mx-auto pt-16">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold">Happy Client Says</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eum
          nostrum dolor
          <br /> itaque dignissimos assumenda.
        </p>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1, // Display one slide per view on devices with width 640px or less
          },
          // Add more breakpoints as needed
        }}
      >
        {testimonialChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="py-0 md:py-10 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                {chunk.map((data) => (
                  <ReviewPreview key={data.id} data={data} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
