import { combineReducers } from "redux";
import postReducer from "./reducers";

const rootReducer = combineReducers({
  postsData: postReducer,
});

export default rootReducer;
