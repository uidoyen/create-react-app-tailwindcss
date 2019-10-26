import { combineReducers } from "redux";
// import settings from "./settings.reducer";
import authReducer from "./authReducer";

const beetleReducers = combineReducers({
  authReducer
});

export default beetleReducers;
