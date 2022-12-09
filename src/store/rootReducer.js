import { combineReducers } from "redux";

import repReducer from "../pages/Home/reducers";

export const rootReducer = combineReducers({
  repos: repReducer,
});
