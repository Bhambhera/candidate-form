import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../Inputs/CustomInput'
import SubmitButton from '../Buttons/SubmitButton'
import CustomDatePicker from '../Layouts/Common/CustomDatePicker'

function CandidateFormUi({formData , setFormData, loading, submit, setValidationErr, setDate}) {
  return (
    <Stack spacing={2} sx={{ mb: 2 }}>
       <Typography variant="h4" align='center'>
        <Box>
          Candidate Details
        </Box>
       </Typography>
       <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid xs={12} md={4} item>
                <Box>
                    <CustomInput
                    type='text'
                    disabled = {loading}
                    value={formData.first_name}
                    label="First Name*"
                    validate={() => {
                      return (formData.first_name && formData.first_name != "") ? true : "First Name is required."
                    }}
                    onChange = { (e) => {
                        setFormData ({
                          err : "",
                          first_name : e.target.value
                        })
                      }
                    }
                    setValidationErr = {setValidationErr}
                    />
                    
                </Box>
            </Grid>
            <Grid xs={12} md={4} item>
                <Box>
                    <CustomInput
                    type='text'
                    disabled = {loading}
                    value={formData.middle_name}
                    label="Middle Name*"
                    validate={() => {
                      return (formData.middle_name && formData.middle_name != "") ? true : "Middle Name is required."
                    }}
                    onChange = { (e) => {
                        setFormData ({
                          err : "",
                          middle_name : e.target.value
                        })
                      }
                    }
                    setValidationErr = {setValidationErr}
                    />
                    
                </Box>
            </Grid>
            <Grid xs={12} md={4} item>
                <Box>
                    <CustomInput
                    type='text'
                    disabled = {loading}
                    value={formData.last_name}
                    label="Last Name*"
                    validate={() => {
                      return (formData.last_name && formData.last_name != "") ? true : "Last Name is required."
                    }}
                    onChange = { (e) => {
                        setFormData ({
                          err : "",
                          last_name : e.target.value
                        })
                      }
                    }
                    setValidationErr = {setValidationErr}
                    />
                    
                </Box>
            </Grid>
            <Grid xs={12} md={4} item>
                <Box>
                    <CustomDatePicker date={formData.date} onChange = {setDate}/>
                </Box>
            </Grid>
          </Grid>
        </Box>
        <>
        <Box sx={{width : '100%'}}>
          <SubmitButton 
            loading={loading}
            type=""
            title={'Add'}
            onClick = {submit}
          />
        </Box>
        </>
    </Stack>
  )
}

export default CandidateFormUi