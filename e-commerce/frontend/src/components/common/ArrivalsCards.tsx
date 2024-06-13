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
}

const ArrivalsCards: React.FC<Props> = ({ product }) => {
  const image = useImageData(product?.image[0]);

  return (
    <Link to={`/show-product/${product._id}`}>
      <div className="rounded-lg shadow-xl group cursor-pointer transition-transform duration-300 transform hover:mt-[-5px]">
        {image ? (
          <img
            className="w-full h-48 md:h-64 rounded-t-md"
            src={image}
            alt={product.productName}
          />
        ) : (
          <div className="bg-gray-200 h-32 w-full flex items-center justify-center">
            No Image Available
          </div>
        )}
        <div className="my-auto mx-2 p-2">
          <h1 className="text-sm font-semibold sm:my-1">
            {product.productName}
          </h1>
          <h1 className="text-gray-500 text-sm sm:text-md">
            {product.description.substring(0, 20)}...
          </h1>
          <h1 className="sm:my-1 text-sm font-semibold">₹ {product.price}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ArrivalsCards;
