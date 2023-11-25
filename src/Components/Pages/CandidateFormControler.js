import React, { useState } from 'react'
import CandidateFormUi from './CandidateFormUi'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function CandidateFormControler() {
  const params = useParams()
    const defaultFormData = {
        err : "",
        first_name : "",
        middle_name : "",
        last_name : "",
        position : "",
        date : params.time? moment(parseInt(params.time)): moment()
    }
    const [formData, setFormData] = useState(defaultFormData)
    const [loading,setLoading] = useState(false)
    const [validationErr,setValidationErr] = useState(null)
    const setDate = (newDate) => {
      const parsedDate = moment.parse(newDate)
      setFormData({
        ...formData,
        date : parsedDate
      })
    }
    const submit = () => { 
      (validationErr == "") ? (alert('data successfull ')) : (alert('please enetr details'))

    }
    console.log(formData)
    console.log(validationErr)
  return (
    <>
    <CandidateFormUi 
        formData={formData} 
        setFormData={setFormData} 
        loading= {loading}
        submit={submit}
        setDate={setDate}
        setValidationErr={setValidationErr} />
    </>
  )
}

export default CandidateFormControler