import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrderData } from "../../redux/reducers/orderSlice";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import {
  createOrderApi,
  getAPIKey,
  paymentCheckoutAPI,
  paymentVerificationAPI,
} from "../../apis";
import toast from "react-hot-toast";
import PriceDetails from "../common/PriceDetails";
import usePriceDetails from "../../customHooks/usePriceDetails";
import ScrollToTop from "../common/ScrollToTop";
import { useState } from "react";

interface RazorpayOptions {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface User {
  userId: string;
  phone: string;
  address_id: string;
}

interface Product {
  _id: string;
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

const Payment: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceDetails = usePriceDetails();
  const cartData: Product[] = useSelector((state: any) => state.cart.products);
  const user: User = useSelector((state: any) => state.user.user);
  const [paymentMode, setPaymentMode] = useState<string>("cod");

  const checkoutHandler = async (amount: number) => {
    try {
      const keyData = await getAPIKey();
      const order = await paymentCheckoutAPI({ amount });

      if (order.success) {
        const options: RazorpayOptions = {
          key: keyData?.ApiKey || "",
          amount: (order?.Order?.amount || 0).toString(), // Ensure amount is a string
          currency: "INR",
          name: "Noor Fashion",
          description: "Eccommerce platform",
          image: "https://avatars.githubusercontent.com/u/92037401?v=4",
          order_id: order?.Order?.id || "", // Ensure order_id is accessed correctly
          handler: async (response: any) => {
            const data = getData();
            const _data = {
              ...data,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            try {
              const verificationResponse = await paymentVerificationAPI(_data);
              if (verificationResponse.success) {
                setTimeout(() => {
                  navigate("/my/orders");
                }, 1000);
                dispatch(fetchOrderData(user.userId));
                dispatch(fetchCartData(user.userId));
                toast.success(verificationResponse.message);
              } else {
                toast.error(verificationResponse.message);
              }
            } catch (err) {
              toast.error("Payment verification failed");
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "0000000000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#121212",
          },
        };

        // Ensure required fields are present
        if (!options.key || !options.order_id) {
          throw new Error("Missing required fields for Razorpay options");
        }

        // Initialize Razorpay and open the payment form
        const razor = new (window as any).Razorpay(options);
        razor.open();
      } else {
        toast.error(order.message);
      }
    } catch (error) {
      toast.error("Payment initiation failed");
    }
  };

  const getData = () => {
    const products = cartData.map((product: Product) => ({
      quantity: product.quantity,
      productId: product.productId._id,
      size: product.size,
      color: product.color,
    }));

    const totalPrice = cartData.reduce(
      (acc, product) => acc + product.productId.price * product.quantity,
      0
    );
    const totalOfferPrice = cartData.reduce(
      (acc, product) => acc + product.productId.offerPrice * product.quantity,
      0
    );

    return {
      userId: user.userId,
      phone: user.phone,
      addressId: user.address_id,
      products,
      totalPrice,
      totalOfferPrice,
    };
  };

  const createOrderCOD = () => {
    const data = getData();

    createOrderApi(data)
      .then((response: any) => {
        if (response.success) {
          toast.success(response.message);
          setTimeout(() => {
            navigate("/my/orders");
          }, 1000);
          dispatch(fetchOrderData(user.userId));
          dispatch(fetchCartData(user.userId));
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error("Error", err);
      });
  };

  const handleCreateOrder = () => {
    if (paymentMode === "cod") {
      createOrderCOD();
    } else if (paymentMode === "online") {
      const amount = priceDetails.offerPrice;
      checkoutHandler(amount);
    }
  };

  return (
    <div className="pt-20 bg-gray-200">
      <ScrollToTop />
      <div className="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div className="mb-4 px-4 py-2 bg-white flex justify-between shadow-md">
            <h1 className="text-md font-bold">Choose Payment Mode</h1>
          </div>
          <div className="mb-4 px-4 py-2 bg-white shadow-md">
            <div className="bg-gray-200 p-4 rounded-md shadow-md my-2">
              <div className="my-2 flex items-center gap-2">
                <input
                  id="cod"
                  type="radio"
                  className="form-radio text-gray-600 h-5 w-5"
                  value="cod"
                  checked={paymentMode === "cod"}
                  onChange={() => setPaymentMode("cod")}
                />
                <h1 className="font-bold">Cash on Delivery</h1>
              </div>
              <div className="my-2 flex items-center gap-2">
                <input
                  id="online"
                  type="radio"
                  className="form-radio text-gray-600 h-5 w-5"
                  value="online"
                  checked={paymentMode === "online"}
                  onChange={() => setPaymentMode("online")}
                />
                <h1 className="font-bold">Online Payment</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <PriceDetails priceDetails={priceDetails} />
          <div className="bg-white flex justify-center items-center">
            <button
              className="my-2 text-white font-bold bg-gray-400 rounded-md text-center p-2 w-11/12"
              onClick={handleCreateOrder}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
