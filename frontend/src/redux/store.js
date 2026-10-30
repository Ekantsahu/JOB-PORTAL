import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// ✅ Custom storage object — no dependency on redux-persist/lib/storage
const storage = {
    getItem: (key) => {
        if (typeof window === "undefined") return Promise.resolve(null);
        return Promise.resolve(window.localStorage.getItem(key));
    },
    setItem: (key, value) => {
        if (typeof window === "undefined") return Promise.resolve(value);
        return Promise.resolve(window.localStorage.setItem(key, value));
    },
    removeItem: (key) => {
        if (typeof window === "undefined") return Promise.resolve();
        return Promise.resolve(window.localStorage.removeItem(key));
    },
};

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice,
    company: companySlice,
    application: applicationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;