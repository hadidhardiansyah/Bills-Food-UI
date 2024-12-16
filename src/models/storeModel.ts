import { combineReducers } from 'redux';
import { authReducer } from '../State/Authentication/Reducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export type RootStateModel = ReturnType<typeof rootReducer>;
