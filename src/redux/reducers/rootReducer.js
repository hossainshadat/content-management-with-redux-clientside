import { combineReducers } from "redux";
import productReducers from "./productReducers";


const rootReducer = combineReducers({
    product:productReducers
})

export default rootReducer