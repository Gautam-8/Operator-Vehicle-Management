import { createStore ,combineReducers ,applyMiddleware ,compose } from "redux";
import {reducer as Authreducer } from "../features/auth/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({
    authState : Authreducer

});

export const store = createStore(

    rootreducer,
    compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
   // window.__REDUX_DEVTOOLS_EXTENSION__()
    );


