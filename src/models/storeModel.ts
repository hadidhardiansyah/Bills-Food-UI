import { combineReducers } from "redux";
import { authReducer } from "../components/State/Authentication/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
  });
  
export  type RootStateModel = ReturnType<typeof rootReducer>;