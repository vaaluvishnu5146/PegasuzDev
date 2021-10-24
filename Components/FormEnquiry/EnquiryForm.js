import React from "react";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import InputGroup from "../../Elements/InputGroup/InputGroup";

export default function EnquiryForm({ theme }) {
  const { sectionBackground, textColor } = theme;
  const bg = `${sectionBackground} flex flex-col p-10 sm:flex-row`;
  const content = "w-auto lg:p-5 sm:mr-5 sm:w-1/2";
  const heading = "text-4xl";
  const formContainer =
    "relative flex flex-row flex-wrap justify-start sm:w-1/3";
  return (
    <div className={bg}>
      <div className={content}>
        <h1 className={heading}>Got something in your mind?</h1>
        <p>
          Share your details with us, our talented executives can help you!!
        </p>
      </div>
      <div className={formContainer}>
        <InputGroup label="Name" type="text" placeholder="Enter Your Name" />
        <InputGroup
          label="Phone Number"
          type="email"
          placeholder="Enter Your Name"
        />
        <Dropdown />
      </div>
    </div>
  );
}
