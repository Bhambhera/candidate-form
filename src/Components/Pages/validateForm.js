import { validateEmail } from "../../Utils/Helper";


export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.candidate_first_name || formData.candidate_first_name === "") {
      errors.first_name = "First Name is required.";
    }
  
    if (!formData.candidate_middle_name || formData.candidate_middle_name === "") {
      errors.middle_name = "Middle Name is required.";
    }
  
    if (!formData.candidate_last_name || formData.candidate_last_name === "") {
      errors.last_name = "Last Name is required.";
    }
    if (!formData.dob || formData.dob === "") {
      errors.date = "Date of Birth is required.";
    }
    if (!formData.candidate_phone || formData.candidate_phone === "") {
      errors.phone = "Contact Number  is required.";
    }
    if (!formData.candidate_email || formData.candidate_email === "") {
      errors.email = "Email is required.";
    }
    if(!validateEmail(formData.candidate_email)) {
      errors.invalid_email = "Email is not valid"
    }
    if (!formData.qualification || formData.qualification === "") {
      errors.qualification = "Qualification is required.";
    }
    if (!formData.candidate_position || formData.candidate_position === "") {
      errors.position = "Position is required.";
    }
    if (!formData.total_years_of_experience || formData.total_years_of_experience === "") {
      errors.department = "Experience is required.";
    }

    if (!formData.department || formData.department === "") {
      errors.department = "Department is required.";
    }
   
    
   
  
    if (!formData.current_location || formData.current_location === "") {
      errors.location = "Location is required.";
    }
  
    if (!formData.expectation || formData.expectation === "") {
      errors.expectation = "Expectations is required.";
    }
  
    
 
    
    if (!formData.notice_period || formData.notice_period  === "") {
      errors.notice_period  = "notice period  is required.";
    }
  
    return errors;
  };
  