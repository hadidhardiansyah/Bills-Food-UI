import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";

const rooteReducer = combineReducers({
    auth: authReducer as any,
});

export type RootState = ReturnType<typeof store.getState>;
export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk));