import { createStore } from "redux";
import { combineReducers } from "redux";
import fanletter from "./modules/fanletter";

const rootReducer = combineReducers({
  fanletter,
});
const store = createStore(rootReducer);

export default store;
