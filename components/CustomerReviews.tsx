import React from "react";
import CustomerCard from "./CustomerCard";
import { reviews } from "@/constants";

function CustomerReviews() {
  return (
    <section className="max-container">
      <div className="flex justify-center items-center flex-col mb-9">
        <h1 className="font-palanquin text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say ?
        </h1>
        <p className="info-text max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex flex-wrap flew-row gap-4 flex-1 justify-evenly items-center max-lg:flex-col p-5">
        {reviews.map((customer) => (
          <CustomerCard key={customer.customerName} customer={customer} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
