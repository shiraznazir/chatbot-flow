import { useEffect, useState } from "react";
import ArrivalsCards from "../common/ArrivalsCards";
import ProductCardShimmer from "../Shimmer/ProductCardShimmer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SeeMore from "../common/SeeMore";
import { useAppDispatch } from "../../redux/hooks";
import { fetchNewArrivalsData } from "../../redux/reducers/homeSlice";
import toast from "react-hot-toast";
import { ProductProps, Product } from "../../type/index";
import AnimationContainer from "../common/AnimationContainer";
import AnimationItems from "../common/AnimationItems";

const initialVal: ProductProps = {
  products: [],
  currentPage: 1,
};

const NewArrivals = () => {
  const newArrivals = useSelector(
    (state: RootState) => state.home.new_arrival_product
  );
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ProductProps>(initialVal);
  const [loading, setLoading] = useState<boolean>(true);
  const [noMoreProducts, setNoMoreProducts] = useState<boolean>(false);

  const updateData = async (page: number) => {
    setLoading(true);
    const result = await dispatch(fetchNewArrivalsData(page));
    if (fetchNewArrivalsData.fulfilled.match(result)) {
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
    if (newArrivals?.products?.length > 0) {
      setData(newArrivals);
      setNoMoreProducts(false);
      setLoading(false);
    } else {
      if (newArrivals.currentPage > 1) {
        toast.error("No more products");
        setNoMoreProducts(true);
      }
    }
  }, [newArrivals]);

  return (
    <div className="px-4 lg:p-10">
      <div className="sm:border-2 border-gray-200 rounded-lg sm:p-4">
        <h1 className="m-4 text-2xl font-bold">New Arrivals</h1>
        {loading ? (
          <ProductCardShimmer />
        ) : (
          <AnimationContainer>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {data?.products.map((product: Product) => (
                <AnimationItems>
                  <ArrivalsCards key={product._id} product={product} />
                </AnimationItems>
              ))}
            </div>
          </AnimationContainer>
        )}
        <SeeMore
          page={data?.currentPage}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default NewArrivals;
