import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-auto p-10 flex flex-col-reverse items-center sm:flex-row sm:p-20">
      <div className="hero-content max-w-s">
        <h3 className="text-5xl leading-12 white-100 mb-2">
          Finally, a better solution for your business
        </h3>
        <p className=" tracking-widest">
          Providing the better Digital Assets and Branding Ideas, and Automation
          for your business.
        </p>
      </div>
      <div className="hero-content hidden max-w-s mb-5 sm:block sm:mb-0">
        <Image
          src={"/Assets/servicesBackdrop.png"}
          alt="Vercel Logo"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
