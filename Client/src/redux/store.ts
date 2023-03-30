import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(
  persistConfig,
  reducers
) as unknown as typeof reducers;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
