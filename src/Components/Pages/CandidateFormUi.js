import React, { useState } from 'react';
import { TextField,Box, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography, InputAdornment } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';
import SubmitButton from '../Buttons/SubmitButton';
import CustomDatePicker from '../Layouts/Common/CustomDatePicker';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { center } from '../../assets/css/theme/common';
import moment from 'moment';

function CandidateFormUi({ formData, setFormData, loading, submit, setValidationErr, setDate }) {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  // const renderInput = (fieldName,type, label, validationFn) => (
  //   <Box>
  //     <CustomInput
  //       type= {type? type : "text"}
  //       disabled={loading}
  //       value={formData[fieldName]}
  //       label={`${label}*`}
  //       validate={() => {
  //         return formData[fieldName] ? true : `${label} is required.`;
  //       }}
  //       onChange={(e) => {
  //         setFormData({
  //           ...formData,
  //           [fieldName]: e.target.value,
  //         });
  //       }}
  //       setValidationErr={setValidationErr}
  //     />
  //   </Box>
  // );
  

  return (
    <Stack spacing={2} sx={{ mb: 2,padding: '1%' }}>
      <Typography variant="h2" align='center' >
        <Box>
          Candidate Details
        </Box>
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={3} sx={{padding: '2%'}}>
          <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.first_name}
        label='First Name*'
        validate={() => {
                      return (formData.first_name && formData.first_name != "") ? true : "First Name is required."
                    }}
        onChange={(e) => {
          setFormData({
            ...formData,
            first_name : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
          <Grid xs={12} md={4} item>
          
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
                    
          </Grid>
          <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.last_name}
        label='Last Name*'
        validate={() => {
                      return (formData.last_name && formData.last_name != "") ? true : "Last Name is required."
                    }}
        onChange={(e) => {
          setFormData({
            ...formData,
            last_name : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
        
     
        <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.qualification}
        label='Qualification*'
        validate={() => {
                      return (formData.qualification && formData.qualification != "") ? true : "Qualification is required."
                    }}
        onChange={(e) => {
          setFormData({
            ...formData,
           qualification : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
          <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.position}
        label='Position*'
        validate={() => {
                      return (formData.position && formData.position != "") ? true : "Position is required."
                    }}
        onChange={(e) => {
          setFormData({
            ...formData,
            position : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
          <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.relevant_experience}
        label='Relevant Experience'
        // validate={() => {
        //   return formData.relevant_experience ? true : `Last Name is required.`;
        // }}
        onChange={(e) => {
          setFormData({
            ...formData,
            relevant_experience : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
         
          
          
        <Grid xs={12} md={4} item>
        <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.location}
        label='Location'
        validate={() => {
                      return (formData.location && formData.location != "") ? true : "Location is required."
                    }}
                    iconEnd={<LocationSearchingIcon />}  
              
           
        
        onChange={(e) => {
          setFormData({
            ...formData,
            location : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
        </Grid>
        <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.reference_from}
        label='Reference Form'
        // validate={() => {
        //   return formData.relevant_experience ? true : `Last Name is required.`;
        // }}
        onChange={(e) => {
          setFormData({
            ...formData,
            reference_from : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
          <Grid xs={12} md={4} item>
          <CustomInput
          type=  "text"
        disabled={loading}
        value={formData.expectations}
        label='Expectations*'
        validate={() => {
          return formData.expectations ? true : `Expectations is required.`;
        }}
        onChange={(e) => {
          setFormData({
            ...formData,
            expectations : e.target.value,
          });
        }}
        setValidationErr={setValidationErr} />
          </Grid>
          <Grid xs={12} md={4} item>
            <MobileDatePicker sx={{ minWidth: 336 }}
              disabled={loading}
              id="dob"
              name="dob"
              inputFormat="DD MMM,YYYY"
              value={moment(formData.date)}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  err: "",
                  date: e.toISOString(),
                })
              }
              type="date"
              label={"Date Of Birth*"}
              renderInput={(params) => (
                <CustomInput
                  {...params}
                  sx={{ width: '100%' }}
                />
              )}
            />
          </Grid>
         
          <Grid xs={12} md={4} item>
            <FormControl margin="dense" sx={{ minWidth: '100%' }}>
              <InputLabel>Department*</InputLabel>
              <Select sx={{ minWidth: 100 }} 
                label={"Department*"}
                name="Department"
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  });
                }}
              >
                <MenuItem value="intern">Intern</MenuItem>
                <MenuItem value="full time employee">Full Time Employee</MenuItem>
                <MenuItem value="part time employee">Part Time Employee</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Grid>
          
          
          <Grid xs={12} md={4} item>
            <FormControl margin="dense" sx={{ minWidth: '100%' }} >
              <InputLabel>Experience*</InputLabel>
              <Select sx={{ minWidth: 100 }}
                label={"experience*"}
                name="experience"
                value={formData.experience}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setFormData({
                    ...formData,
                    experience: e.target.value,
                  });
                }}
              >
                <MenuItem value="0-3">0-3</MenuItem>
                <MenuItem value="3-5">3-5</MenuItem>
                <MenuItem value="5-7">5-7</MenuItem>
                <MenuItem value="7-10">7-10</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={12} md={4} item>
          <CustomInput
          id="outlined-number"
          label="Notice Period"
          value= {formData.notice_period}
          type="number"
          onChange={(e) => {
          setFormData({
            ...formData,
            notice_period : e.target.value,
          });
        }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        </Grid> 
        </Grid>
      </Box> 
          
       
      <>
        <Box sx={{center, width:'10%', padding : '1%'}}>
          <SubmitButton 
            loading={loading}
            type=""
            title={'Add'}
            onClick={submit}
          />
        </Box>
      </>
    </Stack>
  );
}
export default CandidateFormUi;
