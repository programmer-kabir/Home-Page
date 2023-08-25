import React, { useEffect, useState } from "react";

const ServiceSection = () => {
  const [boxData, setBoxData] = useState([]);
  useEffect(() => {
    fetch("./BoxData.json")
      .then((res) => res.json())
      .then((data) => setBoxData(data));
  }, []);
  return (
    <div className="pt-16 w-11/12 mx-auto">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold">Our Service To Explore</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eum
          nostrum dolor
          <br /> itaque dignissimos assumenda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 pt-8 gap-4 mx-auto">
        {boxData.map((data) => (
          <div key={data.id}>
            <div className="md:w-[300px] space-y-2 text-center border pt-5">
                <img className="w-1/2 h-1/2 mx-auto text-start" src={data.icon} alt="" />
                <h4 className="text-xl font-semibold text-start">{data.title}</h4>
                <p className="text-start">{data.description}</p>
                <button className="mx-auto text-orange-600 font-semibold text-center">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
