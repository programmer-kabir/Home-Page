import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Pagination } from "swiper/modules";
const TeamMember = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("./teamMember.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className=" w-11/12 mx-auto">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold">Our Service To Explore</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eum
          nostrum dolor
          <br /> itaque dignissimos assumenda.
        </p>
      </div>

      {/* content */}
      <div className="pt-12">
        <Swiper
          slidesPerView={4}
          
          spaceBetween={30}
          pagination={{
            clickable: true,
            
          }}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }}
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="border-2 border-orange-500 px-4 py-2 rounded-md">
                <img src={member.image} alt={member.name} />
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-medium">Name: {member.name}</h5>
                    <h5>Position:{member.position}</h5>
                  </div>
                  <div className="flex gap-2">
                    <FaFacebook size={19}/>
                    <FaLinkedin size={19}/>
                    <FaTwitter size={19}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMember;
