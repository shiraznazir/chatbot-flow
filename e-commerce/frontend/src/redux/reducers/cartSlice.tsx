import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartData } from "../../apis";
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

interface CartState {
  products: Product[];
}

const getInitialState = (): CartState => {
  const data = localStorage.getItem("cart");
  try {
    return { products: data ? JSON.parse(data) : [] };
  } catch (error) {
    console.error("Error parsing cart data:", error);
    return { products: [] };
  }
};

export const fetchCartData: any = createAsyncThunk(
  "cart/fetchCartData",
  async (user: string, { dispatch }) => {
    try {
      const response = await getCartData(user);
      if (response.success) {
        dispatch(cartSlice.actions.fetchCart(response?.cartDetails?.items));
      } else {
        toast.error("Error in getting data from cart");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Error fetching cart data");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    fetchCart: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product._id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product._id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    emptyCart: (state) => {
      state.products = [];
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const {
  fetchCart,
  addProductToCart,
  deleteProductFromCart,
  increaseQty,
  decreaseQty,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
