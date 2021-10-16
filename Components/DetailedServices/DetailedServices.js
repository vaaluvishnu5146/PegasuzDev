import React from "react";
import Image from "next/image";

export default function DetailedServices() {
  return (
    <div className="bg-gray-100 flex flex-col sm:flex-row p-5">
      <div className="content lg:w-2/5 lg:p-5 xs:p-0 sm:p-0 mb-5">
        <h1 className="detailed-services-heading">YouTube Video Editing</h1>
        <p>
          Lorem ipsum dolor set amet, Lorem ipsum dolor set ametLorem ipsum
          dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet
        </p>
      </div>
      <div className="flex flex-row items-center justify-center lg:w-auto">
        <Image
          className="rounded-md"
          src={"/Assets/videoEditing.jpeg"}
          alt="Vercel Logo"
          width="800"
          height="400"
        />
      </div>
    </div>
  );
}
