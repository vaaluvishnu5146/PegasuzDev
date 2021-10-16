import React from "react";
import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  FilmIcon,
} from "@heroicons/react/outline";
import HeaderItem from "../HeaderItem/HeaderItem";
import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-col justify-between items-center sm:flex-col m-5 web-container">
      <div className="flex flex-row sm:items-center mb-5">
        <Image
          src="/Assets/logo.png"
          alt="Vercel Logo"
          width={250}
          height={40}
        />
      </div>
      <div className="flex flex-grow justify-evenly mt-1 max-w-sm">
        <HeaderItem Icon={HomeIcon} title={"HOME"} />
        <HeaderItem Icon={UserGroupIcon} title={"ABOUT"} />
        <HeaderItem Icon={FilmIcon} title={"SERVICES"} />
        <HeaderItem Icon={PhoneIcon} title={"CONTACT"} />
        <HeaderItem Icon={HomeIcon} title={"JuJu"} />
      </div>
    </header>
  );
}

export default Header;
