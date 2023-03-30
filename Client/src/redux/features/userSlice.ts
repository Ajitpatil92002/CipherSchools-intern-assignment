import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type StateType = {
  isloading?: boolean;
  userDetails?: {} | boolean;
  iserror?: boolean;
  error?: string | undefined;
  token?: string | null;
};

const initialState: StateType = {
  isloading: false,
  userDetails: false,
  iserror: false,
  error: "",
  token: null,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:5500/api/auth/login", {
      email,
      password,
    });
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
    const response = await axios.post("http://localhost:5500/api/auth/signup", {
      name,
      email,
      password,
    });
    return response.data;
  }
);

export const userUpdate = createAsyncThunk(
  "user/userUpdate",
  async ({ _id, ...usersDetails }: any) => {
    const response = await axios.put(`http://localhost:5500/api/users/${_id}`, {
      ...usersDetails,
    });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isloading = false;
      state.userDetails = false;
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
      state.error = action.error.message;
      state.userDetails = false;
      state.token = null;
    });
    builder.addCase(Signup.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(
      Signup.fulfilled,
      (state, action: PayloadAction<StateType>) => {
        state.userDetails = action.payload;
        state.isloading = false;
        state.token = action.payload.token;
        state.iserror = false;
        state.error = "";
      }
    );
    builder.addCase(Signup.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message;
      state.userDetails = false;
      state.token = null;
    });
    builder.addCase(userUpdate.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(
      userUpdate.fulfilled,
      (state, action: PayloadAction<StateType>) => {
        state.userDetails = action.payload;
        state.isloading = false;
        state.iserror = false;
        state.error = "";
      }
    );
    builder.addCase(userUpdate.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.error = action.error.message;
      state.userDetails = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
