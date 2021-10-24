import React from "react";

export default function InputGroup({
  label,
  placeholder,
  id,
  type,
  value,
  cta,
}) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1">{label}</label>
      <input
        type={type}
        className="w-full h-10 p-2 border-2 border-black"
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
