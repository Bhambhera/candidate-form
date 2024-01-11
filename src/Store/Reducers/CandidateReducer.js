import axios from "axios"
import { candidateActionTypes } from "../../Utils/Constants"

const initialState = {
    err : '',
    first_name : '',
    middle_name : '',
    last_name : '',
    date : '',   
    position : '',
    department : '',
    total_experience : '',
    relevant_experience : '',
    qualification : '',
    reference : '',
    location : '',
    notice_period : '',
    expectation : '',
    disabled : false
}
const candidateReducer = (state = initialState, action) => {
    switch(action.type) {
        case candidateActionTypes.SENDING_DETAILS: {
            
            const rootURL = 'https://localhost:8000/api/'
            axios({
                url:`${rootURL}/candidate-form/`, 
                method:"post",
                headers:{
                  "Content-Type":"application/json"
                },
                data:action.payload
              })
              .then(res => {
                  
                  state.disabled = false
              })
              .catch(err => [
                
                state.disabled = false
              ])
            return {...state}
        }
        case candidateActionTypes.HANDLING_CHANGE : {
            const {fieldName, fieldValue} = action.payload
            return {
                ...state,
                [fieldName] : fieldValue
            }
        }
        default : {
            return state
        }
    }
}
export default candidateReducer