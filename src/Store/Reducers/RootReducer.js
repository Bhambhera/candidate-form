import { combineReducers } from "redux";
import candidateReducer from "./CandidateReducer";
import modalReducer from "./ModalReducer";

const rootReducer = combineReducers({
    candidate : candidateReducer,
    modal : modalReducer
})

export default rootReducer