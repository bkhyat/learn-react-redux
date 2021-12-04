import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import {combineReducers} from "redux";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
)

export default rootReducer;