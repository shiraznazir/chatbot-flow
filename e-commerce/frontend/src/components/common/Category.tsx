import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import FilterBox from "./FilterBox";
import SortingBtn from "./SortingBtn";
import { getProductsBySearch } from "../../apis";
import CategoryCard from "./CategoryCard";
import FilterDrawer from "./FilterDrawer";
import FilterBtn from "./FilterBtn";
import ScrollToTop from "./ScrollToTop";
import ProductCardShimmer from "../Shimmer/ProductCardShimmer";
import { useImmer } from "use-immer";
import { produce } from "immer";
import Loader from "./Loader";

interface FilteredItem {
  name: string;
  checked: boolean;
}

interface PriceParams {
  minPrice: number;
  maxPrice: number;
  label?: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  slug: string;
  isNewArrival: boolean;
  image: {
    id: number;
    thumbnail: number;
    original: number;
  };
  gallery: {
    id: number;
    thumbnail: string;
    original: string;
  };
  price: number;
  sale_price: number;
}

const initialPrice: PriceParams = {
  minPrice: 0,
  maxPrice: 0,
};

const categoryList = ["Men", "Women", "Kids", "Sports", "Accessories"];

interface ColorListProps {
  name: string;
  color: string;
  border?: string;
  checked: boolean;
}

const initialColorList: ColorListProps[] = [
  {
    name: "White",
    color: "bg-white",
    border: "border-gray-500",
    checked: false,
  },
  { name: "Yellow", color: "bg-yellow-500", checked: false },
  { name: "Blue", color: "bg-blue-800", checked: false },
  { name: "Black", color: "bg-black", checked: false },
  { name: "Green", color: "bg-green-600", checked: false },
  { name: "Maroon", color: "bg-red-700", checked: false },
  { name: "Gray", color: "bg-gray-400", checked: false },
  { name: "Brown", color: "bg-[#964B00]", checked: false },
];

const priceList: PriceParams[] = [
  { minPrice: 149, maxPrice: 499, label: "Rs. 149 to Rs. 499" },
  { minPrice: 500, maxPrice: 999, label: "Rs. 500 to Rs. 999" },
  { minPrice: 1000, maxPrice: 1999, label: "Rs. 1000 to Rs. 1999" },
  { minPrice: 2000, maxPrice: 2999, label: "Rs. 2000 to Rs. 2999" },
  { minPrice: 3000, maxPrice: 4999, label: "Rs. 3000 to Rs. 4999" },
  { minPrice: 5000, maxPrice: 100000, label: "Rs. 5000 and Above" },
];

// const sizeList = ["S", "M", "L", "XL", "XXL"];

const Category = () => {
  const params = useParams();
  // const location = useLocation();
  const [pageNo] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchLoader, setSearchLoader] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<string[]>([]);
  const [colorsData, setColorsData] =
    useImmer<ColorListProps[]>(initialColorList);
  const [priceData, setPriceData] = useState<PriceParams>(initialPrice);
  const [sizeData, setSizeData] = useState<string[]>([]);

  const getData = () => {
    const colors = colorsData
      .filter((item: FilteredItem) => item.checked)
      .map((item: FilteredItem) => item.name);

    const data: any = {
      ...(categoryData.length > 0 && { category: categoryData }),
      ...(colors.length > 0 && { color: colors }),
      ...(priceData.minPrice > 0 && { minPrice: priceData.minPrice }),
      ...(priceData.maxPrice > 0 && { maxPrice: priceData.maxPrice }),
    };
    return data;
  };

  const getProductBySearch = () => {
    const data = getData();
    const keywords: any = params?.search
      ? {
          search: params.search ? params.search : "",
        }
      : {
          category: params.category ? params.category : "",
          subCategory: params.subCategory ? params.subCategory : "",
          type: params.type ? params.type : "",
          pageNo: pageNo,
        };

    const paramsUrl = new URLSearchParams(keywords);
    getProductsBySearch({ keyword: paramsUrl, data: data })
      .then((response: any) => {
        if (response.success) {
          setProducts(response?.products);
        } else {
          toast.error(response.message);
        }
        setSearchLoader(false);
        setLoading(false);
      })
      .catch((err: any) => {
        toast.error(err);
      });
  };

  const handleSize = (size: string) => {
    const isAdded = sizeData.includes(size);
    setSizeData(
      isAdded ? sizeData.filter((s) => s !== size) : [...sizeData, size]
    );
  };

  const handlePriceRange = (params: PriceParams) => {
    setPriceData(params);
  };

  const handleColors = useCallback(
    (params: string) => {
      setColorsData(
        produce((draft: ColorListProps[]) => {
          const color = draft.find((c) => c.name === params);
          if (color) {
            color.checked = !color.checked;
          }
        })
      );
    },
    [setColorsData]
  );

  const handleCategory = (category: string) => {
    const isAdded = categoryData.includes(category);
    setCategoryData(
      isAdded
        ? categoryData.filter((c) => c !== category)
        : [...categoryData, category]
    );
  };

  useEffect(() => {
    if (params?.category || params?.search) {
      setLoading(true);
      getProductBySearch();
      params?.search && setSearchLoader(true);
    }
  }, [params]);

  console.log("params ", params);

  useEffect(() => {
    if (
      categoryData.length > 0 ||
      colorsData.some((c) => c.checked) ||
      sizeData.length > 0 ||
      priceData.minPrice > 0 ||
      priceData.maxPrice > 0
    ) {
      getProductBySearch();
    }
  }, [categoryData, colorsData, sizeData, priceData]);

  const onClose = () => setIsDrawerOpen(false);

  const handleColorFilterClose = (colorVal: string) =>
    setColorsData(
      colorsData.map((c) =>
        c.name === colorVal ? { ...c, checked: false } : c
      )
    );

  const handleCategoryFilterClose = (categoryVal: string) =>
    setCategoryData(
      categoryData?.filter((category: string) => category !== categoryVal)
    );

  const handleFilterClose = () => console.log("Filter");

  return (
    <div className="pt-20">
      <ScrollToTop />
      {searchLoader ? (
        <Loader />
      ) : (
        <>
          <div className="p-4 lg:p-10">
            <div className="flex">
              <Link to={`/`}>
                <h1 className="text-sm font-normal">Home </h1>
              </Link>
              <Link to={`/products/style/${params?.category}`}>
                {params.category && (
                  <h1 className="text-sm font-normal">
                    &nbsp; {"/ " + params?.category}
                  </h1>
                )}
                {params.search && (
                  <h1 className="text-sm font-normal">
                    &nbsp;{" "}
                    {"/ " +
                      params?.search?.charAt(0)?.toUpperCase() +
                      params?.search?.slice(1)}
                  </h1>
                )}
              </Link>
              <Link
                to={`/products/style/${params?.category}/${params?.subCategory}`}
              >
                <h1 className="text-sm font-normal">
                  &nbsp; {params.subCategory && "/ " + params.subCategory}
                </h1>
              </Link>
              <Link
                to={`/products/style/${params?.category}/${params?.subCategory}/${params?.type}`}
              >
                <h1 className="text-sm font-bold">
                  &nbsp; {params.type && "/ " + params.type}
                </h1>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-12">
              <div className="hidden md:block">
                <div className="my-4 flex justify-between">
                  <h1 className="text-2xl font-semibold">Filters</h1>
                  <h1 className="text-xs font-light mt-2 cursor-pointer">
                    Clear All
                  </h1>
                </div>
                <div className="my-4 flex flex-wrap gap-2">
                  <FilterBox
                    item={
                      params?.type ||
                      params?.search ||
                      params?.subCategory ||
                      params?.category ||
                      ""
                    }
                    handleFilterClose={handleFilterClose}
                  />
                  {categoryData?.map((category: string) => (
                    <FilterBox
                      key={category}
                      item={category}
                      handleFilterClose={handleCategoryFilterClose}
                    />
                  ))}
                  {colorsData
                    ?.filter((c) => c.checked)
                    .map((color) => (
                      <FilterBox
                        key={color.name}
                        item={color.name}
                        handleFilterClose={handleColorFilterClose}
                      />
                    ))}
                  {sizeData.map((size: string) => (
                    <FilterBox
                      key={size}
                      item={size}
                      handleFilterClose={() => handleSize(size)}
                    />
                  ))}
                </div>
                <div className="border-b-[1px] border-gray-300"></div>

                {/* Category */}
                {!params?.category && (
                  <>
                    <div className="flex flex-col gap-4">
                      <h1 className="my-4 font-semibold">Category</h1>
                      {categoryList?.map((category) => (
                        <div className="flex gap-4" key={category}>
                          <input
                            type="checkbox"
                            className="rounded cursor-pointer w-5 h-5 border border-purple-300 checked:bg-gray-500 checked:border-transparent focus:outline-none focus:border-gray-300"
                            onChange={() => handleCategory(category)}
                          />
                          <label className="ml-2">{category}</label>
                        </div>
                      ))}
                    </div>
                    <div className="my-8 border-b-[1px] border-purple-300"></div>
                  </>
                )}

                {/* Colors */}
                <div className="flex flex-col gap-4">
                  <h1 className="font-semibold">Colors</h1>
                  {colorsData?.map((colorItem) => (
                    <div className="flex gap-4" key={colorItem.name}>
                      <input
                        type="checkbox"
                        className="rounded w-5 h-5 cursor-pointer border border-gray-300 checked:bg-gray-500 checked:border-transparent focus:outline-none focus:border-purple-300"
                        checked={colorItem?.checked}
                        onChange={() => handleColors(colorItem.name)}
                      />
                      <div className="flex justify-center items-center gap-2">
                        <div
                          className={`ml-2 w-5 h-5 border ${
                            colorItem.color
                          } rounded-full ${colorItem.border || ""}`}
                        ></div>
                        <label>{colorItem.name}</label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="my-8 border-b-[1px] border-purple-300"></div>

                {/* Price */}
                <div className="flex flex-col gap-4">
                  <h1 className="font-semibold">Price</h1>
                  {priceList?.map((priceRange) => (
                    <div className="flex gap-4" key={priceRange.label}>
                      <input
                        type="checkbox"
                        className="rounded w-5 h-5 cursor-pointer border border-gray-300 checked:bg-gray-500 checked:border-transparent focus:outline-none focus:border-purple-300"
                        checked={
                          priceData.minPrice === priceRange.minPrice &&
                          priceData.maxPrice === priceRange.maxPrice
                        }
                        onChange={() => handlePriceRange(priceRange)}
                      />
                      <label className="ml-2">{priceRange.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4 md:col-span-3 mt-4">
                <div className="flex justify-between">
                  <FilterBtn onClick={() => setIsDrawerOpen(true)} />
                  <h1 className="hidden md:block text-2xl font-bold">
                    Search Results for{" "}
                    <span className="text-gray-700">
                      "{params.category || params.search}"
                    </span>
                  </h1>
                  <SortingBtn />
                </div>
                {loading ? (
                  <div className="mt-5">
                    <ProductCardShimmer />
                  </div>
                ) : (
                  <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                    {products?.map((product) => (
                      <CategoryCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <FilterDrawer isOpen={isDrawerOpen} onClose={onClose} />
    </div>
  );
};

export default Category;
