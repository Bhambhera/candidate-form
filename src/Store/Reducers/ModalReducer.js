import { modalActionTypes } from "../../Utils/Constants";

const initialState = {
    open: false,
    component: <></>,
    title: "",
    onConfirm: () => {

    },
    onCancle: () => {

    },
    confirmText: "Submit",
    resetText: "Cancel",
    size: 'md',
    dialogProps:{}

}
const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case modalActionTypes.OPEN_MODAL:  return {
            ...state,
            open: true,
            component: action.component,
            size: action.size,
            title: action.title,
            onConfirm: action.onConfirm ?? null,
            onCancle: action.onCancle ?? null,
            dialogProps:action.dialogProps??{},
            confirmText: action.confirmText ?? "Submit",
            resetText: action.resetText ?? "Cancel",

        };
        case modalActionTypes.CLOSE_MODAL:  return { ...state, open:false,onConfirm:null,onCancle:null,title:null };
        default: return { ...state }
    }

}
export default modalReducer
