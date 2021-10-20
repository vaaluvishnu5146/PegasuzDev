import React, { useState, useEffect } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

export default function Section() {
  const [services, setServices] = useState(null);
  const data = [
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
    {
      logo: "/Assets/YouTubefull.png",
      service: "YouTube Video Editing Consulting",
    },
  ];

  useEffect(() => {
    setServices(data);
  }, []);

  return (
    <div className="bg-gray-900 p-10 flex flex-col flex-grow justify-start items-center">
      <h1 className="text-2xl text-white mb-10">Our Services</h1>
      <div className="services-content flex flex-row max_sm:flex-grow flex-wrap justify-center">
        {services &&
          services.map((d, i) => (
            <ServicesCard key={i} title={d.service} src={d.logo} />
          ))}
      </div>
    </div>
  );
}
