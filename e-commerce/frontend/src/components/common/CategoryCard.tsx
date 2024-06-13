import { Link } from "react-router-dom";
import useImageData from "../../customHooks/useBinayImage";

const CategoryCard = ({ product: product }: { product: any }) => {
  const image = useImageData(product?.image[0]);
  return (
    <Link to={`/show-product/${product._id}`}>
      <div className="rounded-lg cursor-pointer shadow-xl transition-transform duration-300 transform hover:mt-[-5px]">
        <img
          className="w-full h-48 md:h-64 rounded-t-md"
          src={image}
          alt={product.name}
        />
        <div className="my-auto mx-2 p-2">
          <h1 className="text-sm font-semibold sm:my-1">
            {product.productName}
          </h1>
          <h1 className="text-[0.60rem] md:text-sm">
            {product.description.substring(0, 20)}...
          </h1>
          <h1 className="sm:my-1 text-sm font-semibold">₹ {product.price}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
