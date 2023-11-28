import React, { useState } from 'react'
import CandidateFormUi from './CandidateFormUi'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function CandidateFormControler() {
  const params = useParams()
    const defaultFormData = {
        err : '',
        first_name : '',
        middle_name : '',
        last_name : '',
        position : '',
        date : ""   
    }
    const [formData, setFormData] = useState(defaultFormData)
    const [loading,setLoading] = useState(false)
    const [validationErr,setValidationErr] = useState(null)
    const setDate = (newDate) => {
      const parsedDate = moment(newDate)
      const formattedDate = parsedDate.format("DD MM YYYY")
      setFormData({
        ...formData,
        date : formattedDate
      })
    }
    const submit = () => { 
      (validationErr == null) ? (alert('data successfull ')) : (alert('please enetr details'))

    }
    console.log(formData)
    console.log(formData.date)
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