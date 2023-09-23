import React from "react";
import Image from "next/image";

type Customer = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

type CustomerCardProps = {
  customer: Customer;
};
function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 flex-1 ">
      <Image
        src={customer.imgURL}
        alt="Shoe Collection"
        width={100}
        height={103}
        className="object-contain rounded-full "
      />

      <p className="text-center max-w-sm info-text p-5">{customer.feedback}</p>

      <div className="flex flex-row justify-start items-center ">
        <Image src="/star.svg" alt="rating" width={24} height={20} />
        <p className="info-text p-2">({customer.rating})</p>
      </div>

      <h1 className="font-montserrat font-bold text-center text-2xl mt-3">
        {customer.customerName}
      </h1>
    </div>
  );
}

export default CustomerCard;
