import { createStore } from "redux";
import { combineReducers } from "redux";
import fanletter from "./modules/fanletter";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  fanletter,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
