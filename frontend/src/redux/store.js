
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";

// Custom storage
const storage = {
  getItem: (key) => {
    if (typeof window === "undefined") {
      return Promise.resolve(null);
    }

    return Promise.resolve(localStorage.getItem(key));
  },

  setItem: (key, value) => {
    if (typeof window === "undefined") {
      return Promise.resolve(value);
    }

    localStorage.setItem(key, value);
    return Promise.resolve(value);
  },

  removeItem: (key) => {
    if (typeof window === "undefined") {
      return Promise.resolve();
    }

    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company: companySlice,
  application: applicationSlice,
});

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,

  // Persist only authentication state
  whitelist: ["auth"],
};

// Persist reducer
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

// Configure store
const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

// Persist store
export const persistor = persistStore(store);

export default store;
