import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.css";
import { BiPlayCircle } from "react-icons/bi";
import BoxInfo from "../BoxInfo/BoxInfo";
const Banner = () => {
  const boxInfoStyle = {
    position: "relative",
    zIndex: 30,
  };
  return (
    <div>
      {/*  */}

      <div className="bannerStyle">
        <div className="overlayStyle">
          {/* <Content > */}

          <div className="w-11/12 mx-auto text-white pt-16 md:pt-0">
            <div className="lg:flex flex-row-reverse md:gap-16 items-center md:h-[650px] h-full">
              <div className="md:w-1/3">
                <img
                  className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] border-8 border-white rounded-full mx-auto"
                  src="https://i.ibb.co/Nj3WCd5/rightside.jpg"
                  alt=""
                />
              </div>
              <div className="space-y-5 md:w-3/5 pt-5 md:pt-0">
                <h2 className="text-5xl font-semibold">
                  Repair Offer The best Home service
                </h2>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum cumque exercitationem earum tempore iste aut
                  blanditiis ullam.
                </p>
                <div className="flex gap-10 items-center justify-center md:justify-start">
                  <button className="bg-[#F25109]  text-white py-2 px-5 rounded">
                    Contact us
                  </button>
                  <button className="flex items-center gap-1 border-white border px-4 py-2 rounded-md ">
                    <BiPlayCircle /> <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="absolute m-16 mx-auto bottom-16">
          <BoxInfo />
          </div> */}
        </div>
      </div>
      {/* <BoxInfo style={boxInfoStyle}></BoxInfo> */}
    </div>
  );
};

export default Banner;

// https://i.ibb.co/vZCzCLV/1000-F-408853106-o-XOs2-Ftaqz-IU5-Gd-V4e-Dwg-INIy-Kqu-DFNs.jpg

// src="https://i.ibb.co/Nj3WCd5/rightside.jpg
