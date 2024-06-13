import React, { useEffect, useState } from "react";
import ProductCardShimmer from "../Shimmer/ProductCardShimmer";
import SellingCards from "../common/SellingCards";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { fetchFeaturedData } from "../../redux/reducers/homeSlice";
import SeeMore from "../common/SeeMore";
import { ProductProps, Product } from "../../type/index";
import toast from "react-hot-toast";

const initialVal: ProductProps = {
  products: [],
  currentPage: 1,
};

const FeaturedProducts: React.FC = () => {
  const featuredProducts = useSelector(
    (state: RootState) => state.home.featured_product
  );
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ProductProps>(initialVal);
  const [loading, setLoading] = useState<boolean>(true);
  const [noMoreProducts, setNoMoreProducts] = useState<boolean>(false);

  const updateData = async (page: number) => {
    setLoading(true);
    const result = await dispatch(fetchFeaturedData(page));
    if (fetchFeaturedData.fulfilled.match(result)) {
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Error fetching products");
    }
  };

  const handlePrevious = () => {
    const page = Number(data.currentPage) - 1;
    if (page > 0) {
      updateData(page);
    }
  };

  const handleNext = () => {
    if (!noMoreProducts) {
      const page = Number(data.currentPage) + 1;
      updateData(page);
    }
  };

  useEffect(() => {
    if (featuredProducts.products.length > 0) {
      setData(featuredProducts);
      setNoMoreProducts(false);
      setLoading(false);
    } else {
      if (featuredProducts.currentPage > 1) {
        toast.error("No more products");
        setNoMoreProducts(true);
      }
    }
  }, [featuredProducts]);
  console.log("Data ", data);

  return (
    <div className="px-4 sm:p-4 lg:p-10">
      <h1 className="m-2 md:m-4 text-xl md:text-2xl font-bold">
        Featured Products
      </h1>
      <div>
        {loading ? (
          <ProductCardShimmer />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.products.map((product: Product) => (
              <SellingCards key={product._id} product={product} />
            ))}
          </div>
        )}
        <SeeMore
          page={data.currentPage}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
