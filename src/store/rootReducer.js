import { combineReducers } from "redux";

import { repositoriesReducer } from "../pages/Home/reducers";

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});
