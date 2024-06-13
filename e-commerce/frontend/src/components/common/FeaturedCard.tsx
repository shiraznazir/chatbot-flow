import React from "react";
import { Link } from "react-router-dom";
import useImageData from "../../customHooks/useBinayImage";

interface Image {
  data: Uint8Array;
}

interface Product {
  _id: string;
  image: { img: Image }[];
  productName: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
  index: number;
}

const FeaturedCard: React.FC<Props> = ({ product, index }) => {
  const img = product?.image;
  const image = useImageData(img[0]);

  return (
    <Link to={`/show-product/${product._id}`} className="text-black">
      <div
        key={product._id}
        className={`bg-purple-100 shadow-xl rounded-xl p-4 pt-10 cursor-pointer group ${
          index === 0 ? "col-span-2 row-span-2" : ""
        }`}
      >
        {/* Ensure image is available before rendering */}
        {image && (
          <img
            className={`w-full transition-transform duration-300 transform group-hover:scale-110 cursor-pointer ${
              index === 0 ? "lg:h-[35rem]" : "h-36 sm:h-48 lg:h-52"
            }`}
            src={image}
            alt={product.productName}
          />
        )}
        <h1 className="text-sm font-semibold sm:my-1">{product.productName}</h1>
        <h1 className="text-[0.60rem] md:text-sm">
          {product.description.substring(0, 30)}...
        </h1>
        <h1 className="my-1 font-semibold">${product.price}</h1>
      </div>
    </Link>
  );
};

export default FeaturedCard;
