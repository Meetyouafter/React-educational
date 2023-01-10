import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import personReducer from "./nameReducer";

const rootReducer = combineReducers({
    count: counterReducer,
    persons: personReducer,
});

export default rootReducer;
