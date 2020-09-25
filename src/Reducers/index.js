import { auth } from "firebase";
import { combineReducers } from "redux";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
