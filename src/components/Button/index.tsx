import { classNames } from "./../../utils/classNames";
import React from "react";

interface ButtonProp {
  child: any;
  className: any;
  type: "button" | "submit";
  img?: string;
  onClick?: any;
}

export default function Button({
  child,
  type,
  className,
  img,
  onClick,
}: ButtonProp) {
  return (
    <button type={type} className={className}>
      {child}
    </button>
  );
}
