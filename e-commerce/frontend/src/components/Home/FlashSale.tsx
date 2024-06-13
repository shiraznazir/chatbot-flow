import { useState } from "react";
import SaleCard from "../common/SaleCard";
// import { getFlashSale } from "../../apis";

interface Product {
  id: number;
  url: string;
  product: string;
  category: string;
  price: number;
}

const FlashSale: React.FC = () => {
  const [saleData] = useState<Product[]>([]);

  // const getFlashSaleData = () => {
  //   getFlashSale()
  //     .then((response: Product[]) => {
  //       setSaleData(response);
  //     })
  //     .catch((err: Error) => {
  //       console.error("Error ", err);
  //     });
  // };

  // useEffect(() => {
  //   getFlashSaleData();
  // }, []);

  return (
    <div className="flex justify-center items-center p-4 lg:p-10 z-0">
      <div className="w-full md:border-2 border-gray-200 rounded-lg p-0 md:p-4">
        <h1 className="m-2 md:m-4 text-xl md:text-2xl font-bold">Flash Sale</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
          {saleData.map((item) => (
            <SaleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
