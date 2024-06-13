import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Admin {
  phone: number;
  adminId: string;
  token: string;
}

interface AdminState {
  admin: Admin | null;
}

const setInitialState = (): AdminState => {
  const data: string | null = localStorage.getItem("admin");
  let admin: Admin | null = null;

  try {
    if (data) {
      admin = JSON.parse(data);
    }
  } catch (error) {
    console.error("Error parsing admin data:", error);
  }

  return { admin };
};

const adminSlice = createSlice({
  name: "admin",
  initialState: setInitialState(),
  reducers: {
    fetchAdmin: (state, action: PayloadAction<Partial<Admin>>) => {
      if (state.admin) {
        state.admin = { ...state.admin, ...action.payload };
        localStorage.setItem("admin", JSON.stringify(state.admin));
      }
    },
    login: (state, action: PayloadAction<Admin>) => {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(state.admin));
    },
    logout: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
    },
  },
});

export const { fetchAdmin, login, logout } = adminSlice.actions;
export default adminSlice.reducer;
