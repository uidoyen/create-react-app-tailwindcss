import { combineReducers } from "redux";
// import authReducer from "./beetle";
import beetle from "./beetle";
const createReducer = asyncReducers =>
  combineReducers({
    beetle,
    ...asyncReducers
  });

export default createReducer;
