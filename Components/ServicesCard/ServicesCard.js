import React from "react";
import Image from "next/image";

export default function ServicesCard({ title, src }) {
  return (
    <div className="services-card bg-white rounded-sm flex flex-col justify-start items-center group">
      <Image src={src} alt="Vercel Logo" width={50} height={50} />
      <h4 className="text-center">{title}</h4>
    </div>
  );
}
