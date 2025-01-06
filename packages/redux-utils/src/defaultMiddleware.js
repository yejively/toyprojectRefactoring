import logger from "redux-logger";

export const createDefaultMiddleware = (isDev = false) => {
  return (getDefaultMiddleware) =>
    isDev ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
};
