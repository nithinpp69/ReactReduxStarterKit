import { combineReducers } from "redux";
import home from "../modules/home/reducer/home";

const AppReducer = combineReducers({
  home
});

export default AppReducer;
