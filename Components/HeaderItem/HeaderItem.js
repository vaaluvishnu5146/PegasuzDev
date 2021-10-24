import React from "react";

export default function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-10 sm:w-40">
      <Icon className="h-8 mb-1 group-hover:animate-bounce group-hover:text-black" />
      <p className="opacity-0 group-hover:opacity-100 group-hover:text-black tracking-widest">
        {title}
      </p>
    </div>
  );
}
