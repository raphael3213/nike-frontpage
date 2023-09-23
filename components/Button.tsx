import React from "react";
import Image from "next/image";

type ButtonProps = {
  label: string;
  iconUrl?: string;
  fullWidth?: boolean;
  backgroundColorWhite?: boolean;
};

function Button({
  label,
  iconUrl,
  backgroundColorWhite,
  fullWidth,
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColorWhite
          ? "bg-white text-slate-gray border-black"
          : " bg-coral-red  text-white  border-coral-red "
      } ${fullWidth ? "w-full" : ""}`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="Button Icon"
          width={20}
          height={20}
          className="ml-2 rounded-full "
        />
      )}
    </button>
  );
}

export default Button;
