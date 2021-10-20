import React from "react";
import Image from "next/image";

export default function ServicesCard({ title, src }) {
  return (
    <div className="group">
      <div className="services-card bg-white rounded-sm flex flex-col justify-start items-start group-hover:animate-bounce">
        <Image src={src} alt="Vercel Logo" width={80} height={50} />
        <h4>{title}</h4>
      </div>
    </div>
  );
}
