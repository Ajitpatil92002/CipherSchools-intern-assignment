import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type userDetailsType = {
  _id: string | number;
  name: string;
  email: string;
};

type StateType = {
  isloading: boolean;
  userDetails: userDetailsType | null;
  iserror: boolean;
  error: string | null;
  token: string | null;
};

const initialState: StateType = {
  isloading: false,
  userDetails: null,
  iserror: false,
  error: "",
  token: null,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      {
        email,
        password,
      }
    );
    return response.data.data;
  }
);

export const Signup = createAsyncThunk(
  "user/signup",
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      {
        name,
        email,
        password,
      }
    );
    return response.data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isloading = false;
      state.userDetails = null;
      state.iserror = false;
      state.error = "";
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<StateType>) => {
        state.userDetails = action.payload.userDetails;
        state.token = action.payload.token;
        state.isloading = false;
        state.iserror = false;
        state.error = "";
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message || "something error";
      state.userDetails = null;
      state.token = null;
    });
    builder.addCase(Signup.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(
      Signup.fulfilled,
      (state, action: PayloadAction<StateType>) => {
        state.userDetails = action.payload.userDetails;
        state.isloading = false;
        state.token = action.payload.token;
        state.iserror = false;
        state.error = "";
      }
    );
    builder.addCase(Signup.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message || "something error";
      state.userDetails = null;
      state.token = null;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
