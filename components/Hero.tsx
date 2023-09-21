"use client";
import React, { useState } from "react";
import Button from "./Button";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import ShoeCard from "./ShoeCard";

function Hero() {
  const [bigShoe, setBigShoe] = useState(shoes[0].bigShoe.src);
  return (
    <section
      id="home"
      className="border-red-500 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mr-3">Nike</span>
          <span>Shoes</span>
        </h1>
        <p className="font-montserrat text-slate text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl="/arrow-right.svg" />
        <div className="flex flex-row justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoe}
          width={610}
          height={500}
          alt="Big Shoe 1"
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.key}>
              <ShoeCard
                imgURL={shoe}
                setBigShoe={setBigShoe}
                bigShoeImg={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
