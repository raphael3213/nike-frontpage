import React from "react";
import Button from "./Button";
import Image from "next/image";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className=" max-container grid lg:grid-cols-2 gap-14"
    >
      <div>
        <h1 className="font-montserrat text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>

        <p className="mt-4 font-montserrat text-slate-gray ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 mb-8 font-montserrat text-slate-gray ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button label="View details" />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/shoe8.svg"
          alt="Shoe Collection"
          width={1200}
          height={1200}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
