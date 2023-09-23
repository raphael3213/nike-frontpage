import React from "react";
import Image from "next/image";

type Service = {
  imgURL: string;
  label: string;
  subtext: string;
};

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className=" flex-1 flex  rounded-xl sm:min-w-[350px] sm:w-[350px] min-w-full flex-col shadow-2xl gap-4 px-10 py-20">
      <Image
        src={service.imgURL}
        alt="Shoe Collection"
        width={36}
        height={36}
        className="object-contain bg-coral-red rounded-full p-1"
      />

      <h1 className="font-bold text-2xl font-palanquin"> {service.label}</h1>

      <p className="font-montserrat text-slate-gray "> {service.subtext}</p>
    </div>
  );
}

export default ServiceCard;
