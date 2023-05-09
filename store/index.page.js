import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import { jsonServerApi } from "./jsonServerApi";
const reducer = combineReducers({
  // here we will be adding reducers
  user,
  [jsonServerApi.reducerPath]: jsonServerApi.reducer,
});
const store = configureStore({
  reducer,
});
export default store;
