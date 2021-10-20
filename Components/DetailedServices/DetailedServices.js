import React from "react";
import Image from "next/image";

export default function DetailedServices({
  logo,
  dimension,
  service,
  description,
  serviceImage,
  theme,
}) {
  const { sectionBackground, textColor } = theme;
  const { width, height } = dimension;
  const bg = `${sectionBackground} flex flex-col p-10 sm:flex-row`;
  const headingStyle = `detailed-services-heading ${textColor}`;
  return (
    <div className={bg}>
      <div className="flex flex-row items-center justify-center group mb-5 hover:hidden lg:w-auto">
        <Image
          className="rounded-md group-hover:animate-pulse"
          src={serviceImage}
          alt="Vercel Logo"
          width="800"
          height="400"
        />
      </div>
      <div className="contentlg:w-1/2 lg:p-5 sm:mr-5">
        <Image
          className="rounded-md mb-10"
          src={logo}
          alt="Vercel Logo"
          width={width}
          height={height}
        />
        <h1 className={headingStyle}>{service}</h1>
        <p className={textColor}>{description}</p>
      </div>
    </div>
  );
}
