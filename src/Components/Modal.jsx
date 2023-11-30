import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Zoom } from "@mui/material";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Store/Actions/ModalActions";
import { Cancel } from "@mui/icons-material";
import SubmitButton, { ResetButton } from "./Buttons/SubmitButton";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="dwn" ref={ref} {...props} />;
});

const Modal = () => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const handleClose = () => { modal.onCancle ? modal.onCancle() : dispatch(closeModal()) }

    

    return <Dialog

        fullWidth={true}
        TransitionComponent={Transition}
        maxWidth={modal.size}
        open={modal.open}
        onClose={handleClose}
    >
        <DialogTitle >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant='h3'>{modal.title}</Typography>
                <IconButton onClick={handleClose}>
                    <Cancel />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent {...modal.dialogProps}>
            {modal.component}
        </DialogContent>
        <DialogActions>
            {modal.onCancle && <Box>
                <ResetButton title="Cancel" onClick={modal.onCancle}></ResetButton>
            </Box>}
            {modal.onConfirm && <Box>
                <SubmitButton title={modal.confirmText ?? "Submit"} onClick={modal.onConfirm}></SubmitButton>
            </Box>}
        </DialogActions>


    </Dialog>
}
export default Modal
