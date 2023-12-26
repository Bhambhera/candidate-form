import React from 'react'
import { CenteredBox } from '../Layouts/Common/Boxes'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { openModal } from '../../Store/Actions/ModalActions'
import CandidateDetails from './CandidateDetails'

function FormSubmitUi() {
  return (
    <CenteredBox>
         <Box mt={3} mb={3}>
            <Box
                mb={4}
                sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                }}
            >
                <Typography variant="h3">Your Form Has Been Submitted </Typography>
            </Box>
         </Box>
    </CenteredBox>
  )
}

export default FormSubmitUi