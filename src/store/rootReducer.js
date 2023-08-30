import { combineReducers } from "redux";
import breedsReducer from "./reducers/breedsSlice";

const rootReducer = combineReducers({
  breedsReducer,
});

export default rootReducer;
