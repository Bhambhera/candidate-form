import React from 'react';
import {Box,Link, AppBar, Toolbar, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography, Snackbar } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';
import SubmitButton from '../Buttons/SubmitButton';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { center } from '../../assets/css/theme/common';
import moment from 'moment';
import Wehear from "../../assets/images/Wehear.jpg";
import MuiAlert from '@mui/material/Alert';
import { validateEmail } from '../../Utils/Helper';



function CandidateFormUi({
  formData,
  setFormData,
  submit,
  setValidationErr,
  setDate,
  snackbarOpen,
  snackbarMessage,
  handleSnackbarClose,
  selectedPosition,
  setSelectedPosition,
}) {
  const loading = formData.disabled;

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
        <Grid container rowSpacing={2} columnSpacing={2} sx={{padding: '2%'}}>
          
        <Grid xs={12} md={4} item>
          
          <CustomInput
                    type="text"
                    disabled = {loading}
                    value={formData.candidate_first_name}
                    label="First Name*"a
                    autoFocus = {true}
                    onChange = { (e) => {
                        setFormData ({
                          ...formData,
                          candidate_first_name : e.target.value
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
              value={formData.candidate_middle_name}
              label="Middle Name*"
              onChange = { (e) => {
                setFormData ({
                  ...formData,
                  candidate_middle_name : e.target.value
                })
              }}
              setValidationErr = {setValidationErr}
            />        
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "text"
              disabled={loading}
              value={formData.candidate_last_name}
              label='Last Name*'
              onChange={(e) => {
                setFormData({
                  ...formData,
                  candidate_last_name : e.target.value,
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
              value={moment(formData.dob)}
              onChange={setDate}
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
            <CustomInput
              type=  "number"
              disabled={loading}
              value={formData.candidate_phone}
              label='Contact Number*'
              onChange={(e) => {
                setFormData({
                    ...formData,
                    candidate_phone : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "email"
              disabled={loading}
              value={formData.candidate_email}
              label='Email*'
              onChange={(e) => {
                setFormData({
                  ...formData,
                  candidate_email : e.target.value,
                });
              }} 
              validate={() => {
                if (!validateEmail(formData.candidate_email)) {
                  return "Invalid Email"
                }
                return true
              }} 
              setValidationErr={setValidationErr} 
            />
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
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
          <FormControl margin="dense" sx={{ minWidth: '100%' }}>
              <InputLabel>Position*</InputLabel>
              <Select sx={{ minWidth: 100 }} 
                label={"Position*"}
                name="Position"
                value={selectedPosition}
                onChange={(e) => {
                  setSelectedPosition(e.target.value);
                  setFormData({
                    ...formData,
                    candidate_position: e.target.value,
                  });
                }}
              >
                <MenuItem value="intern">Intern</MenuItem>
                <MenuItem value="full time employee">Full Time Employee</MenuItem>
                <MenuItem value="part time employee">Part Time Employee</MenuItem>
                <MenuItem value="work form home">Work From Home</MenuItem>
                <MenuItem value="freelancer">Freelancer</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "text"
              disabled={loading}
              value={formData.department}
              label='Department*'
              placeholder = "Department to be applied"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  department : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <FormControl margin="dense" sx={{ minWidth: '100%' }} >
              <InputLabel>Experience*</InputLabel>
              <Select sx={{ minWidth: 100 }}
                label={"experience*"}
                name="experience"
                value={formData.total_years_of_experience}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    total_years_of_experience: e.target.value,
                  });
                }}
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="0.5">0.5</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="1.5">1.5</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="2.5">2.5</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="3.5">3.5</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="4.5">4.5</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="5.5">5.5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="6.5">6.5</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="7.5">7.5</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="8.5">8.5</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="9.5">9.5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">More Than 10</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "number"
              disabled={loading}
              value={formData.relevant_experience}
              placeholder = "Related Experience in Years"
              label='Relevant Experience'
              onChange={(e) => {
                setFormData({
                  ...formData,
                  relevant_experience : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid> 
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "text"
              disabled={loading}
              value={formData.current_location}
              label='Location*'
              iconEnd={<LocationSearchingIcon />}  
              onChange={(e) => {
                setFormData({
                  ...formData,
                  current_location : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "number"
              disabled={loading}
              value={formData.expectation}
              label='Expectations*'
              placeholder = "In terms of LPA"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  expectation : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
              type=  "text"
              disabled={loading}
              value={formData.reference_from}
              label='Reference From'
              onChange={(e) => {
                setFormData({
                  ...formData,
                  reference_from : e.target.value,
                });
              }}
              setValidationErr={setValidationErr} 
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CustomInput
            id="outlined-number"
            label="Notice Period *"
            value= {formData.notice_period}
            placeholder = "In terms of Month"
            type="number"
            onChange={(e) => {
                    
                    setFormData({
                      ...formData,
                      notice_period: e.target.value,
                    });
                  }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid> 
      </Grid>
      </Box> 
          
       
     
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>

        {/* Submit Button */}
        <Box sx={{ center, width: '10%', padding: '1%', marginc: 'center' }}>
          <SubmitButton loading={loading} disabled = {loading} type="" title={'Submit'} onClick={submit} />
        </Box>
      </Stack>
    </React.Fragment>
  );
}
export default CandidateFormUi;