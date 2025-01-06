import { configureStore } from "@reduxjs/toolkit";
import { createDefaultMiddleware } from "./defaultMiddleware";

export const createStoreConfig = (rootReducer, options = {}) => {
  const isDev = process.env.NODE_ENV === "development";

  return configureStore({
    reducer: rootReducer,
    middleware: createDefaultMiddleware(isDev),
    devTools: isDev,
    ...options,
  });
};
