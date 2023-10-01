import { combineReducers } from "redux";
import breedsReducer from "./reducers/breedsSlice";
import breedInfoReducer from "./reducers/breedInfoSlice";

const rootReducer = combineReducers({
  breedsReducer,
  breedInfoReducer,
});

export default rootReducer;
