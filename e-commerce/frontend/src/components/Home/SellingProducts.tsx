import { useEffect, useState } from "react";
import SellingCards from "../common/SellingCards";
import ProductCardShimmer from "../Shimmer/ProductCardShimmer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SeeMore from "../common/SeeMore";
import { useAppDispatch } from "../../redux/hooks";
import { fetchAllProductData } from "../../redux/reducers/homeSlice";
import { ProductProps, Product } from "../../type/index";
import toast from "react-hot-toast";

const initialVal: ProductProps = {
  products: [],
  currentPage: 1,
};

const SellingProducts = () => {
  const sellingProducts = useSelector(
    (state: RootState) => state.home.all_products
  );
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ProductProps>(initialVal);
  const [loading, setLoading] = useState<boolean>(true);
  const [noMoreProducts, setNoMoreProducts] = useState<boolean>(false);

  const updateData = async (page: number) => {
    setLoading(true);
    const result = await dispatch(fetchAllProductData(page));
    if (fetchAllProductData.fulfilled.match(result)) {
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
    if (sellingProducts.products.length > 0) {
      setData(sellingProducts);
      setNoMoreProducts(false);
      setLoading(false);
    } else {
      console.log("Data ", data);

      if (sellingProducts.currentPage > 1) {
        toast.error("No more products");
        setNoMoreProducts(true);
      }
    }
  }, [sellingProducts]);

  return (
    <div className="p-4 lg:p-10">
      <h1 className="m-4 text-xl sm:text-2xl font-bold">On Selling Products</h1>

      {loading ? (
        <ProductCardShimmer />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data?.products?.map((product: Product) => (
            <SellingCards key={product?._id} product={product} />
          ))}
        </div>
      )}
      <SeeMore
        page={data?.currentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default SellingProducts;
