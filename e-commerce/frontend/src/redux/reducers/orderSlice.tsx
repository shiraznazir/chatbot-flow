import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllOrderApi } from "./../../apis";
import toast from "react-hot-toast";

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

interface OrderState {
  products: Product[];
}

const data = localStorage.getItem("order");
let initialState: OrderState;

try {
  initialState = {
    products: data ? JSON.parse(data) : [],
  };
} catch (error) {
  console.error("Error parsing order data:", error);
  initialState = {
    products: [],
  };
}

export const fetchOrderData: any = createAsyncThunk(
  "order/fetchOrderData",
  async (user: string, { dispatch }) => {
    try {
      const response = await getAllOrderApi(user);
      if (response.success) {
        const orders: any[] =
          response?.userOrders?.flatMap((element: any) =>
            element.items.map((item: any) => ({
              address: element?.address,
              status: element?.status,
              userId: element?.userId,
              order_id: element?._id,
              ...item,
            }))
          ) ?? [];

        dispatch(orderSlice.actions.fetchAllOrder(orders));
      } else {
        toast.error("Error in getting data from cart");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Error fetching cart data");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchAllOrder: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      localStorage.setItem("order", JSON.stringify(state.products));
    },
    createOrder: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem("order", JSON.stringify(state.products));
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.productId._id !== action.payload
      );
      localStorage.setItem("order", JSON.stringify(state.products));
    },
    emptyOrder: (state) => {
      state.products = [];
      localStorage.setItem("order", JSON.stringify(state.products));
    },
  },
});

export const { fetchAllOrder, createOrder, deleteOrder, emptyOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
