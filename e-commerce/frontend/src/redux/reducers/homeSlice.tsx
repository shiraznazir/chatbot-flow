import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getFeaturedProducts,
  getNewArrivals,
  getAllProducts,
} from "../../apis";
import toast from "react-hot-toast";
import { ProductProps } from "../../type/index";

interface HomeState {
  all_products: ProductProps;
  new_arrival_product: ProductProps;
  featured_product: ProductProps;
}

const initialVal: ProductProps = {
  products: [],
  currentPage: 0,
};

const initialState: HomeState = {
  all_products: initialVal,
  new_arrival_product: initialVal,
  featured_product: initialVal,
};

export const fetchNewArrivalsData = createAsyncThunk<ProductProps, number>(
  "home/fetchNewArrivalsData",
  async (page, { rejectWithValue }) => {
    try {
      const response = await getNewArrivals(page);
      if (response.success) {
        return {
          products: response.products,
          currentPage: response.CurrentPage,
        };
      } else {
        toast.error("Error in getting products");
        return rejectWithValue("Error in getting products");
      }
    } catch (error: any) {
      console.error("Error in getting products", error);
      toast.error("Error in getting products");
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const fetchFeaturedData = createAsyncThunk<ProductProps, number>(
  "home/fetchFeaturedData",
  async (page, { rejectWithValue }) => {
    try {
      const response = await getFeaturedProducts(page);
      if (response.success) {
        return {
          products: response.products,
          currentPage: response.CurrentPage,
        };
      } else {
        toast.error("Error in getting products");
        return rejectWithValue("Error in getting products");
      }
    } catch (error: any) {
      console.error("Error in getting products", error);
      toast.error("Error in getting products");
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const fetchAllProductData = createAsyncThunk<ProductProps, number>(
  "home/fetchAllProductData",
  async (page, { rejectWithValue }) => {
    try {
      const response = await getAllProducts(page);
      if (response.success) {
        return {
          products: response.products,
          currentPage: response.CurrentPage,
        };
      } else {
        toast.error("Error in getting products");
        return rejectWithValue("Error in getting products");
      }
    } catch (error: any) {
      console.error("Error in getting products", error);
      toast.error("Error in getting products");
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchNewArrivalsData.fulfilled,
      (state, action: PayloadAction<ProductProps>) => {
        state.new_arrival_product = action.payload;
      }
    );
    builder.addCase(
      fetchFeaturedData.fulfilled,
      (state, action: PayloadAction<ProductProps>) => {
        state.featured_product = action.payload;
      }
    );
    builder.addCase(
      fetchAllProductData.fulfilled,
      (state, action: PayloadAction<ProductProps>) => {
        state.all_products = action.payload;
      }
    );
  },
});

export default homeSlice.reducer;
