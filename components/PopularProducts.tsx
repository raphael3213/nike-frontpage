import { products } from "@/constants";
import React from "react";
import ProductCard from "./ProductCard";

function PopularProducts() {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="font-palanquin font-bold text-4xl ">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
          {products.map((shoe) => (
            <ProductCard product={shoe} key={shoe.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
