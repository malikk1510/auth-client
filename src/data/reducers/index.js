import { combineReducers } from "redux";
import adminReducer from "./admin/admin.reducer";

const rootReducer = combineReducers({
  adminReducer,
 
});

export default rootReducer;
