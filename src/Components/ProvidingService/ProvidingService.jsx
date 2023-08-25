import React, { useEffect, useState } from "react";

const ProvidingService = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [services, setServices] = useState( []);

  useEffect(() => {
    fetch("./providingServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const uniqueCategories = [
    "ALL",
    ...new Set(services.map((service) => service.category)),
  ];
  return (
    <div className="pt-16 w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">We Providing Helpful Service</h1>
        <div className="pt-6 flex  gap-4 justify-center">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              className={`border border-orange-600 px-4 py-2 rounded-md ${
                activeTab === category ? "bg-orange-500" : ""
              } text-sm font-medium`}
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
        {services
          .filter(
            (service) => activeTab === "ALL" || service.category === activeTab
          )
          .map((service) => (
            <div key={service.id} className="space-y-2 border border-orange-500 p-2 rounded-lg">
              <img className="rounded-md" src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProvidingService;
