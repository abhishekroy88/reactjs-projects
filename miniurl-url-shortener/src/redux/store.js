import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shortUrlReducer from "./reducers";

const reducers = {
  shortUrlReducer
};

const rootReducer = combineReducers(reducers);

export default () => createStore(rootReducer, applyMiddleware(thunk));
