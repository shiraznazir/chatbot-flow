import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Product {
  order_id: string;
  productId: {
    _id: string;
    productName: string;
    offerPrice: number;
    price: number;
    discount: number;
    category?: string;
    subCategory?: string;
    type?: string;
    size?: string[];
    color?: string[];
    image: { img: { data: Uint8Array } }[];
    details: string;
    description: string;
  };
  quantity: number;
  color: string;
  size: string;
}

interface Price {
  price: number;
  offerPrice: number;
}

const usePriceDetails = () => {
  const cartData = useSelector((state: any) => state.cart.products);
  const [priceDetails, setPriceDetails] = useState<Price>({
    price: 0,
    offerPrice: 0,
  });

  useEffect(() => {
    if (cartData) {
      const totalMRP = cartData.reduce(
        (acc: number, item: Product) =>
          acc + item?.productId?.price * item?.quantity,
        0
      );
      const totalOfferPrice = cartData.reduce(
        (acc: number, item: Product) =>
          acc + item?.productId?.offerPrice * item?.quantity,
        0
      );
      const data: Price = { price: totalMRP, offerPrice: totalOfferPrice };
      setPriceDetails(data);
    }
  }, [cartData]);

  return priceDetails;
};

export default usePriceDetails;
