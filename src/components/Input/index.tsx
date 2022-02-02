import React from "react";

interface InputProp {
  label: string;
  name: string;
  classname?: string;
  placeHolder?: string;
  value: string;
  handleChange?: any;
  type: string;
}

export default function Input({
  type,
  label,
  value,
  name,
  placeHolder,
  handleChange,
}: InputProp) {
  return (
    <div className="">
      <label
        className="flex pb-2 text-blue-900 text-base font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={handleChange}
        className="border px-3 w-60 rounded-lg py-3 outline-none"
      />
    </div>
  );
}
