import React, { useState } from 'react';
import { TextField,Box,Link,Icon, AppBar, Toolbar, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography, InputAdornment, Snackbar } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';
import SubmitButton from '../Buttons/SubmitButton';
import CustomDatePicker from '../Layouts/Common/CustomDatePicker';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { center } from '../../assets/css/theme/common';
import moment from 'moment';
import Wehear from "./Wehear.jpg";
import HomeIcon from '@mui/icons-material/Home';
import MuiAlert from '@mui/material/Alert';
import { validateForm } from './validateForm';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";



 
  function CandidateFormUi({ formData, setFormData, submit, setValidationErr, setDate }) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [requiredField, setRequiredField] = useState(null); // New state to store the required field
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const loading = formData.disabled;
  
    const handleValidation = () => {
      const errors = validateForm(formData);
      setValidationErr(errors);
      
      if (Object.keys(errors).length > 0) {
        // Get the first field with an error
        const firstErrorField = Object.keys(errors)[0];
        setRequiredField(firstErrorField);
        setSnackbarMessage(`${firstErrorField} is required.`);
        setSnackbarOpen(true);
      }
  
      return Object.keys(errors).length === 0;
    };
  
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };
  
    const handleFormSubmit = () => {
      if (handleValidation()) {
        submit();
      } else {
        console.log("Form has validation errors");
      }
    };

  return (<React.Fragment>
    <AppBar sx={{ background: "#222222", height: "50px", position: "sticky" }}>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <Link href="https://www.wehear.in" sx={{ margin: "auto" }}>
      <img
        src={Wehear}
        alt="Wehear Logo"
        style={{ width: "150px", height: "45px" }}
        draggable="false"
      />
    </Link>
    <Link href="https://www.wehear.in"></Link>
  </Toolbar>
</AppBar>

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
                    type="text"
                    disabled = {loading}
                    value={formData.first_name}
                    label="First Name*"
                    
                    onChange = { (e) => {
                        setFormData ({
                          ...formData,
                          first_name : e.target.value
                        })
                      }
                    }
                    setValidationErr = {setValidationErr}
                    />
                    
          </Grid>
          <Grid xs={12} md={4} item>
          
          <CustomInput
                    type="text"
                    disabled = {loading}
                    value={formData.middle_name}
                    label="Middle Name*"
                    
                    onChange = { (e) => {
                        setFormData ({
                          ...formData,
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
          onChange={setDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        </Grid> 
        </Grid>
      </Box> 
          
       
      <>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

        <Box sx={{center, width:'10%', padding : '1%',marginc:'center'}}>
          <SubmitButton 
            loading={loading}
            type=""
            title={'Add'}
            onClick={handleFormSubmit}
          />
        </Box>
      </>
    </Stack>
    </React.Fragment>
  );
}
export default CandidateFormUi;