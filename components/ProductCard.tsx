import React from "react";
import Image from "next/image";

type Product = {
  imgURL: string;
  name: string;
  price: string;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-sm:w-full flex flex-1 flex-col w-full sm:mb-4">
      <Image
        src={product.imgURL}
        alt="Shoe Collection"
        width={300}
        height={103}
        className="object-contain "
      />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <Image src="/star.svg" alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.2)
        </p>
      </div>
      <div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {product.name}
        </h3>
        <p className="font-bold text-coral-red text-lg mt-1">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
