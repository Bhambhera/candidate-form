  import React, { useState } from 'react';
  import CandidateFormUi from './CandidateFormUi';
  import moment from 'moment';
  import axios from 'axios';
  import { openModal } from '../../Store/Actions/ModalActions';
  import CandidateDetails from './CandidateDetails';
  import { Modal } from '@mui/material';
  import { validateForm } from './validateForm';

  const API_URL = 'https://jsonplaceholder.typicode.com/todos/'; // Replace with your actual API URL

  function CandidateFormControler() {
    const defaultFormData = {
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
    const [formData, setFormData] = useState(defaultFormData)

    const [validationErr, setValidationErr] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const setDate = (date) => {
      const formattedDate = moment(date).format('DD MMM,YYYY');
      setFormData({
        ...formData,
        date: formattedDate,
      });
    };

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    const handleApiResponse = (res) => {
      console.log('API response:', res);
      openModal({
        title: 'Candidate Details',
        component: <CandidateDetails />,
        size: 'md',
      });
    };

    const handleApiError = (err) => {
      console.error('API error:', err);
      setSnackbarMessage('Error submitting data. Please try again.');
      setSnackbarOpen(true);
    };

    const sendDetails = () => {
      axios
        .post(API_URL, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(handleApiResponse)
        .catch(handleApiError);
    };

    const handleValidation = () => {
      const errors = validateForm(formData);
      setValidationErr(errors);
      
      if (Object.keys(errors).length > 0) {
        // Get the first field with an error
        const firstErrorField = Object.keys(errors)[0];
     
        setSnackbarMessage(`${firstErrorField} is required.`);
        setSnackbarOpen(true);
      }

      return Object.keys(errors).length === 0;
    };

    
    const handleFormSubmit = () => {
      if (handleValidation()) {
        sendDetails();
      } else {
        console.log("Form has validation errors");
      }
    };




    return (
      <>
        <CandidateFormUi
          formData={formData}
          setFormData={setFormData}
          submit={handleFormSubmit}
          setValidationErr={setValidationErr}
          setDate={setDate}
          snackbarOpen={snackbarOpen}
          snackbarMessage={snackbarMessage}
          handleSnackbarClose={handleSnackbarClose}
          selectedDepartment={selectedDepartment} // Pass selectedDepartment
        setSelectedDepartment={setSelectedDepartment} // Pass setter function
        />
      </>
    );
  }

  export default CandidateFormControler;