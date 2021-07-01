import { combineReducers } from "redux";
import {
	flagAReducer,
	flagBReducer
} from "./flagReducer";

const appReducer = combineReducers({
	flagA: flagAReducer,
	flagB: flagBReducer,
});

export default appReducer;
