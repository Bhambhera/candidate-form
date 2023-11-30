import { modalActionTypes } from "../../Utils/Constants"

export const openModal = ({ component, dialogProps = {}, size = 'md', title, confirmText = "Submit", resetText = "Cancel", onCancle, onConfirm }) => {
    return { type: modalActionTypes.OPEN_MODAL, component, size, title, confirmText, resetText, onCancle, onConfirm, dialogProps }
  }
  export const closeModal = () => {
    return { type: modalActionTypes.CLOSE_MODAL }
  }
  