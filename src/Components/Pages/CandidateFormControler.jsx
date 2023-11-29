import React, { useState } from 'react'
import CandidateFormUi from './CandidateFormUi'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handlingChange, sendingDetails } from '../../Store/Actions/CandidateActions'
import axios from 'axios'

function CandidateFormControler() {
  const defaultFormData = {
    err : '',
    first_name : '',
    middle_name : '',
    last_name : '',
    date : '27 nov 2023',   
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
  const [validationErr, setValidationErr] = useState(null)
  const setDate = (newDate) => {
    const parsedDate = moment(newDate)
    const formattedDate = parsedDate.format("DD MMM,YYYY")
    setFormData({
      ...formData,
      date : formattedDate
    })
  }
  const handleError = () => {
    console.log('Please enter details')
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const handleApiResponse = (res) => {
    console.log('api provided response')
    console.log(res)
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const handleApiError = (err) => {
    console.log('api provided error')
    console.log(err)
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const sendDetails = () => {
    console.log('sending details')
    const rootURL = 'https://localhost:8000/api/'
            axios({
                url:`${rootURL}/candidate-form/`, 
                method:"post",
                headers:{
                  "Content-Type":"application/json"
                },
                data:formData
              })
              .then(res => {
                  handleApiResponse(res)
              })
              .catch(err => [
                handleApiError(err)
              ])
    console.log(formData)
  }
  
  const submit = (e) => {
    console.log('submit function called')
    e?.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      disabled : true 
    }))
     validationErr == null ? sendDetails() : handleError()
  }
    console.log(validationErr)
  return (
    <>
    <CandidateFormUi 
        formData={formData} 
        setFormData={setFormData} 
        submit={submit}
        setValidationErr = {setValidationErr}
        setDate={setDate}
         />
    </>
  )
}

export default CandidateFormControler