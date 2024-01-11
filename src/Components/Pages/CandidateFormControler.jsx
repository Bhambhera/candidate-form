import React, { useEffect, useState } from 'react';
import CandidateFormUi from './CandidateFormUi';
import moment from 'moment';
import axios from 'axios';
import { openModal } from '../../Store/Actions/ModalActions';
import CandidateDetails from './CandidateDetails';
import { validateForm } from './validateForm';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import FormSubmitUi from './FormSubmitUi';

function CandidateFormControler() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useParams()
  const defaultFormData = {
    token: '',
    err: '',
    candidate_first_name: '',
    candidate_middle_name: '',
    candidate_last_name: '',
    dob: '',
    candidate_email: '',
    candidate_phone: '',
    candidate_position: '',
    department: '',
    total_years_of_experience: '',
    relevant_experience: '',
    qualification: '',
    reference_from: '',
    current_location: '',
    notice_period: '',
    expectation: '',
    disabled: false,

  }
  const [formData, setFormData] = useState([defaultFormData])

  const [validationErr, setValidationErr] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(null);
  const setDate = (date) => {
    const formattedDate = moment(date).format('DD MMM,YYYY');
    setFormData({
      ...formData,
      dob: formattedDate,
    });
  };

 


  useEffect(() => {
    setFormData({
      ...formData,
      token: token,
    })
    const retreivedToken = JSON.parse(localStorage.getItem('token'))
    if (formData.token === retreivedToken) {
      navigate('/submitted')
    }
  }, [token])

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleApiResponse = (res) => {
    localStorage.setItem('token', JSON.stringify(formData.token))
    
    navigate('/submitted')
    dispatch(openModal({
      title: 'Candidate Details',
      component: <CandidateDetails status='res' data={formData} />,
      size: 'md',
    }))
    setFormData(defaultFormData)
  };

  const handleApiError = (err) => {
    dispatch(openModal({
      title: 'Candidate Details',
      component: <CandidateDetails status='err' data={err?.response?.data?.data?.[0]?.msg ?? err?.response?.data?.message} />,
      size: 'md',
    }))
    setFormData(prevState => ({
      ...prevState,
      disabled: false
    }))
    setSnackbarMessage('Error submitting data. Please try again.');
    setSnackbarOpen(true);
  };

  const sendDetails = () => {
    setFormData(prevState => ({
      ...prevState,
      disabled: true
    }))
    const rootURL = 'https://payrollv2-local-development.up.railway.app/api/candidate-form'
    axios({
      url: `${rootURL}`,
      method: "post",
      headers: {
        Authorization: `${formData.token}`,
        "Content-Type": "application/json"
      },
      data: formData
    })
      .then(res => {
        handleApiResponse(res)
      })
      .catch(err => [
        handleApiError(err)
      ])
  }

  const handleValidation = () => {
    const errors = validateForm(formData);
    setValidationErr(errors);

    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const firstErrorMessage = errors[firstErrorField]

      setSnackbarMessage(`${firstErrorMessage}`);
      setSnackbarOpen(true);
    }

    return Object.keys(errors).length === 0;
  };


  const handleFormSubmit = () => {
    if (handleValidation()) {
      sendDetails();
    } else {
      
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
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
      />
    </>
  );
}

export default CandidateFormControler;