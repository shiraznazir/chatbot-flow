import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserAPI } from "../../apis";
import toast from "react-hot-toast";

interface User {
  phone: number;
  userId: string;
  token: string;
  address_id: string;
}

// interface UserData {
//   firstname: string;
//   lastname: string;
//   gender: string;
//   email: string;
// }

interface UserState {
  user: User | null;
}

const setInitialState = (): UserState => {
  const data: string | null = localStorage.getItem("user");
  let user: User | null = null;

  try {
    if (data) {
      user = JSON.parse(data);
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
  }

  return { user };
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (user: string, { dispatch }) => {
    try {
      const response = await getUserAPI(user);
      if (response.success) {
        console.log("User Details ", response);

        dispatch(userSlice.actions.fetchUser(response.user));
      } else {
        toast.error("Error in getting user details");
      }
    } catch (error) {
      console.error("Error in getting user details:", error);
      toast.error("Error fetching user details");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: setInitialState(),
  reducers: {
    fetchUser: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    login: (state, action: PayloadAction<User>) => {
      console.log("action.payload ", action.payload);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout, fetchUser } = userSlice.actions;
export default userSlice.reducer;
