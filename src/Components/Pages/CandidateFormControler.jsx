import React, { useState } from 'react'
import CandidateFormUi from './CandidateFormUi'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handlingChange, sendingDetails } from '../../Store/Actions/CandidateActions'
import axios from 'axios'
import { openModal } from '../../Store/Actions/ModalActions'
import CandidateDetails from './CandidateDetails'
import { Modal } from '@mui/material'

function CandidateFormControler() {
  const dispatch = useDispatch()
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
  const [validationErr, setValidationErr] = useState(null)
  const setDate = (date) => {
    const parsedDate = moment(date)
    const formattedDate = parsedDate.format("DD MMM,YYYY")
    setFormData({
      ...formData,
      date : formattedDate
    })
  }
  const handleError = () => {
    console.log('Please enter details')
    alert('Please enter details')
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const handleApiResponse = (res) => {
    console.log('api provided response')
    console.log(res)
    dispatch(openModal({
      title : "Candidate Details",
      component : <CandidateDetails status='res' data={formData}/>,
      size : "md"
    }))
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const handleApiError = (err) => {
    console.log('api provided error')
    console.log(err)
    dispatch(openModal({
      title : "Candidate Details",
      component : <CandidateDetails status='err'/>,
      size : "md"
    }))
    setFormData(prevState => ({
      ...prevState,
      disabled : false 
    }))
  }
  const sendDetails = () => {
    console.log('sending details')
    const rootURL = 'https://localhost:8000/api/'
            axios({
                url:`https://jsonplaceholder.typicode.com/todos/`, 
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
    //formData.first_name || formData.middle_name || formData.last_name || formData.date || formData.position || formData.department || formData.total_experience || formData.relevant_experience || formData.qualification || formData.reference || formData.location || formData.notice_period || formData.expectation == '' ? handleError() : sendDetails() 
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
