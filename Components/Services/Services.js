import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

export default function Section() {
  return (
    <div className="bg-gray-900 section-container flex flex-col flex-grow justify-start items-center services-section">
      <h1 className="text-2xl text-white mb-10">Our Services</h1>
      <div className="services-content flex flex-row flex-wrap lg:justify-start md:justify-center sm:justify-center">
        <ServicesCard title="YouTube Video Editing" src="/Assets/Youtube.png" />
        <ServicesCard
          title="Youtube Growth Hacking"
          src="/Assets/Youtube.png"
        />
        <ServicesCard
          title="Digital Posters Designing"
          src="/Assets/Youtube.png"
        />
        <ServicesCard title="Branding" src="/Assets/Youtube.png" />
        <ServicesCard title="Digital Marketting" src="/Assets/Youtube.png" />
      </div>
    </div>
  );
}
