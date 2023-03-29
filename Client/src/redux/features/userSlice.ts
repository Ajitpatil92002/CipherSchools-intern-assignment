import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type StateType = {
  isloading: boolean;
  userDetails: {}[];
  iserror: boolean;
  error: string | undefined;
};

const initialState: StateType = {
  isloading: false,
  userDetails: [],
  iserror: false,
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    return response.data;
  }
);

export const Signup = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:5000/api/auth/signup", {
      email,
      password,
    });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userDetails = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.isloading = false;
      state.iserror = false;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message;
      state.userDetails = [];
    });
    builder.addCase(Signup.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(Signup.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.isloading = false;
      state.iserror = false;
      state.error = "";
    });
    builder.addCase(Signup.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message;
      state.userDetails = [];
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;