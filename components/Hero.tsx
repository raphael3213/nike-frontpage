import React from "react";
import Button from "./Button";
import { statistics } from "@/constants";

function Hero() {
  return (
    <section
      id="home"
      className="border-red-500 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] ">
          <span className="xl:bg-white xl:whitespace-nowrap">
            The new Arrival
          </span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl="/arrow-right.svg" />
        <div className="flex flex-row justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div key={stats.label}>
              <p>{stats.value}</p>
              <p>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
