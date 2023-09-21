import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type Shoe = {
  thumbnail: string;
  bigShoe: StaticImageData;
  key: string;
};
type ShoeCardProps = {
  imgURL: Shoe;
  bigShoeImg: string;
  setBigShoe(bigShoe: string): void;
};

function ShoeCard({ imgURL, setBigShoe, bigShoeImg }: ShoeCardProps) {
  const updateBigShoe = () => {
    if (bigShoeImg !== imgURL.bigShoe.src) {
      setBigShoe(imgURL.bigShoe.src);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        imgURL.bigShoe.src === bigShoeImg
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={updateBigShoe}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
}

export default ShoeCard;
