import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import ProvidingService from "../../Components/ProvidingService/ProvidingService";
import ServiceForm from "../../Components/ServiceForm/ServiceForm";
import TeamMember from "../../Components/TeamMember/TeamMember";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Banner />
      <ServiceSection />
      <ProvidingService />
      <ServiceForm />
      <TeamMember />
      <div data-aos="zoom-in-right">

      <ReviewSection />
      </div>
    </div>
  );
};

export default Home;
