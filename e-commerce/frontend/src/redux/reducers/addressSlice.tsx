import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserAddress {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  town: string;
  city: string;
  state: string;
}

interface Address {
  createdAt: string;
  updatedAt: string;
  userAddress: UserAddress;
  userId: string;
  _id: string;
}

interface AddressState {
  address: Address[];
}

const setInitialState = (): AddressState => {
  const data: string | null = localStorage.getItem("address");
  try {
    return { address: data ? JSON.parse(data) : [] };
  } catch (error) {
    console.error("Error parsing address data:", error);
    return { address: [] };
  }
};

const addressSlice = createSlice({
  name: "address",
  initialState: setInitialState(),
  reducers: {
    fetchAddress: (state, action: PayloadAction<Address[]>) => {
      state.address = action.payload;
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    createAddress: (state, action: PayloadAction<Address>) => {
      state.address.push(action.payload);
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    updateAddress: (
      state,
      action: PayloadAction<{ id: string; data: any }>
    ) => {
      const { id, data } = action.payload;
      state.address = state.address.map((item) =>
        item._id === id ? { ...item, ...data } : item
      );
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    deleteAddress: (state, action: PayloadAction<string>) => {
      state.address = state.address.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    emptyAdresses: (state) => {
      state.address = [];
      localStorage.setItem("address", JSON.stringify(state.address));
    },
  },
});

export const {
  fetchAddress,
  createAddress,
  updateAddress,
  deleteAddress,
  emptyAdresses,
} = addressSlice.actions;
export default addressSlice.reducer;
