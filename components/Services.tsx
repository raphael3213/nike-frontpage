import React from "react";
import Image from "next/image";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="flex gap-5 flex-wrap w-full max-container ">
      {services.map((service) => (
        <ServiceCard service={service} key={service.label} />
      ))}
    </section>
  );
}

export default Services;
