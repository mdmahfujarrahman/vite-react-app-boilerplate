import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

//reducers
import authReducer from "./slices/authSlices/authSlice";



//persist config
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

//combine all reducers
const reducer = combineReducers({
    auth: authReducer,
});

//persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

//store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

//persistor
export const persistor = persistStore(store);
