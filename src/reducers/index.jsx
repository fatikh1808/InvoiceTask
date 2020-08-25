import { combineReducers } from "redux";
import CustomersReducer from "./CustomersReducer";
import AuthReducer from "./AuthReducer";
import TerminalReducer from './TerminalReducer';

export default combineReducers({
    CustomersReducer,
    AuthReducer,
    TerminalReducer
})