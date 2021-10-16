import React from "react";

export default function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-auto sm:w-30">
      <Icon className="h-8 mb-1 group-hover:animate-bounce group-hover:text-black" />
      <p className="opacity-0 group-hover:opacity-100 group-hover:text-black">
        {title}
      </p>
    </div>
  );
}
