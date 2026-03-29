import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  type User,
  type AuthState,
  getUsers,
  getCurrentUser,
} from "../slice/authSliceTypes";

const initialState: AuthState = {
  users: getUsers(),
  currentUser: getCurrentUser(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup(state, action: PayloadAction<User>) {
      const exists = state.users.find((u) => u.email === action.payload.email);

      if (exists) {
        alert("Такий email вже існує");
        return;
      }

      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));

      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },

    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password,
      );

      if (!user) {
        alert("Невірний email або пароль");
        return;
      }

      state.currentUser = user;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(user));
    },

    logout(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
