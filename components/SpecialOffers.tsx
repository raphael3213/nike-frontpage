import React from "react";
import Image from "next/image";
import Button from "./Button";

function SpecialOffers() {
  return (
    <section className="flex flex-wrap-reverse max-container justify-center items-center gap-4">
      <div>
        <Image
          src="/offer.svg"
          alt="Shoe Collection"
          width={650}
          height={650}
          className="object-contain "
        />
      </div>
      <div className=" min-w-[50%] flex flex-col p-4 gap-6 flex-1">
        <h1 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="font-montserrat text-lg text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="font-montserrat text-lg text-slate-gray">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-3">
          <Button label="Shop Now" iconUrl="/arrow-right.svg" />
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
