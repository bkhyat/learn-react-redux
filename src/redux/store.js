import {applyMiddleware, createStore} from "redux";
// import cakeReducer from "./cakes/cakeReducer";
import rootReducer from "./rootReducers";
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;