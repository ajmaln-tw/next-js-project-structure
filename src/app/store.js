import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducers";
import rootSaga from "./rootSaga";
import { reducer as notificationsReducer } from "reapop";
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { createLogger } from "redux-logger";
// import { STATE_REDUCER_KEY } from "../modules/common";

const STATE_REDUCER_KEY = "COMMON";
const middleWares = [];
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
middleWares.push(sagaMiddleware);
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
  whitelist: [STATE_REDUCER_KEY],
  timeout: 10000
};

const reducers = combineReducers({
  ...rootReducer,
  notifications: notificationsReducer()
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: middleWares
});

export const persister = store; // persistStore(persistedReducer);

sagaMiddleware.run(rootSaga);
