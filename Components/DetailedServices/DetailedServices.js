import React from "react";
import Image from "next/image";

export default function DetailedServices({
  logo,
  dimension,
  service,
  description,
  serviceImage,
  sectionBackground,
}) {
  const { width, height } = dimension;
  const bg = `${sectionBackground} + detailed-services-section flex flex-col sm:flex-row`;
  return (
    <div className={bg}>
      <div className="flex flex-row items-center justify-center mb-5 lg:w-auto ">
        <Image
          className="rounded-md"
          src={serviceImage}
          alt="Vercel Logo"
          width="800"
          height="400"
        />
      </div>
      <div className="contentlg:w-1/2 lg:p-5 xs:p-0 sm:p-0">
        <Image
          className="rounded-md mb-10"
          src={logo}
          alt="Vercel Logo"
          width={width}
          height={height}
        />
        <h1 className="detailed-services-heading">{service}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
