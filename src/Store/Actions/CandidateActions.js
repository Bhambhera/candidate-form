import { candidateActionTypes } from "../../Utils/Constants";

const sendingDetails = (formData) => {
    return {
        type : candidateActionTypes.SENDING_DETAILS,
        payload : formData

    }
}
export {sendingDetails}

const handlingChange = (field, value) => {
    return {
        type : candidateActionTypes.HANDLING_CHANGE,
        payload : {
            fieldName : field,
            fieldValue : value
        }
    }
}
export {handlingChange}