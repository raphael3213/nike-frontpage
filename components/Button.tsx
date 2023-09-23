import React from "react";
import Image from "next/image";

type ButtonProps = {
  label: string;
  iconUrl?: string;
};

function Button({ label, iconUrl }: ButtonProps) {
  return (
    <button className="flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white  border-coral-red">
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
