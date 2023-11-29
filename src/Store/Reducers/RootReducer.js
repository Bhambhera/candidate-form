import { combineReducers } from "redux";
import candidateReducer from "./CandidateReducer";

const rootReducer = combineReducers({
    candidate : candidateReducer
})

export default rootReducer